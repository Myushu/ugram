import { Component, OnInit, ViewChild, ElementRef }              from "@angular/core";
import {CookieService}                    from "angular2-cookie/core";
import {Router}                           from "@angular/router";
import {UsersService, IUserResponse}      from "app/services/users/users.service";
import {Http, Headers, RequestOptions}    from "@angular/http";
import {Observable}                       from "rxjs";
import {ConfigService}                    from "app/shared/config";
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import {DomSanitizer, SafeStyle}                     from '@angular/platform-browser';

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
  providers: [ConfigService]
})
export class UploadComponent implements OnInit {
  public videosrc: any;
  public tags = [];
  public mentions = [];
  public desc: string = "";
  public image;
  public isCollapsed = true;

  public blurFilter = [0];
  public grayscaleFilter = [0];
  public sepiaFilter = [0];

  public brightnessFilter = [100];
  public contrastFilter = [100];
  public saturateFilter = [100];
  public opacityFilter = [100];
  public cssFilter: SafeStyle;

  public webcamStream;
  public error: boolean = false;
  public error_message: string = "";
  public data1: any;
  public cropperSettings1: CropperSettings;
  croppedWidth:number;
  croppedHeight:number;
  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private usersService: UsersService,
    private cs: ConfigService,
    private http: Http,
    private sanitizer: DomSanitizer,
    private element: ElementRef,
  ) {
  }

  applyFilters() {
    this.cssFilter = this.sanitizer.bypassSecurityTrustStyle(
      "filter: brightness("+this.brightnessFilter+"%)" +
      " contrast("+this.contrastFilter+"%)" +
      " saturate("+this.saturateFilter+"%)" +
      " opacity("+this.opacityFilter+"%)");
  }

  applyPreFilters(type: string) {
    if (type === 'blur') {
      this.grayscaleFilter = [0];
      this.sepiaFilter = [0];
      this.cssFilter = this.sanitizer.bypassSecurityTrustStyle(
        "filter: blur("+this.blurFilter+"px)");
    }
    if (type === 'sepia') {
      this.grayscaleFilter = [0];
      this.blurFilter = [0];
      this.cssFilter = this.sanitizer.bypassSecurityTrustStyle(
        "filter: sepia("+this.sepiaFilter+"%)");
    }
    if (type === 'gs') {
      this.blurFilter = [0];
      this.sepiaFilter = [0];
      this.cssFilter = this.sanitizer.bypassSecurityTrustStyle(
        "filter: grayscale("+this.grayscaleFilter+"%)");
    }
  }

  fileChangeListener($event) {
    let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function (loadEvent:any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

    };
    myReader.readAsDataURL(file);
  }

  ngOnInit() {
      this.cropperSettings1 = new CropperSettings();
      this.cropperSettings1.canvasWidth = 550;
      this.cropperSettings1.canvasHeight = 550;
      this.cropperSettings1.croppedWidth = 550;
      this.cropperSettings1.croppedHeight = 550;
      this.cropperSettings1.minWidth = 100;
      this.cropperSettings1.minHeight = 100;
      this.cropperSettings1.rounded = false;
      this.cropperSettings1.keepAspect = true;
      this.cropperSettings1.noFileInput = true;
      this.data1 = {};
  }

  cropped(bounds: Bounds) {
    console.log('bb', bounds);
    this.cropperSettings1.croppedHeight = bounds.bottom - bounds.top;
    this.cropperSettings1.croppedWidth = bounds.right - bounds.left;
  }

  fileChange(tags, mentions, filters) {
      let file: File = this.image;//fileList[0];
      let formData:FormData = new FormData();
      formData.append('upload', file, file.name);
      formData.append('DESCRIPTION', this.desc);
      if (mentions.length > 0)
        formData.append('MENTIONs', JSON.stringify(mentions));
      if (tags.length > 0)
        formData.append('HASHTAGs', JSON.stringify(tags));
      formData.append('PICTURE_PROPERTIES', JSON.stringify(filters));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers, withCredentials: true });
      this.http.post(this.cs.getUrl() + '/users/' + this._cookieService.get('user_id') + '/pictures', formData, options)
        .map(res => res)
        .catch(error => Observable.throw(error))
        .subscribe(
          data => this.router.navigate(['home']),
          error => {
            this.error_message = JSON.parse(error._body)['message'];
            this.error = true;
          }
        );
  }

  getBase64Image(base64string) {
    return base64string.replace(/^data:image\/(.+);base64,/, "");
}

  uploadPicture() {
    console.log(this.data1);
    const user_id = this._cookieService.getObject("user_id");
    let u_tags = [];
    let u_mentions = [];
    let u_filters = {
      OPACITY: this.opacityFilter,
      BRIGTHNESS: this.brightnessFilter,
      CONTRAST: this.contrastFilter,
      SATURATE: this.saturateFilter,
      BLUR: this.blurFilter,
      SEPIA: this.sepiaFilter,
      GRAYSCALE: this.grayscaleFilter
    };
    for (let i = 0; i < this.tags.length; i++) {
      u_tags.push({HASHTAG: this.tags[i]["display"]});
    }
    for (let i = 0; i < this.mentions.length; i++) {
      u_mentions.push({ID_USER: this.mentions[i]["value"]});
    }
    let byte = atob(this.getBase64Image(this.data1.image));
    let byteN = new Array(byte.length);
    for (let i = 0; i < byte.length; i++)
        byteN[i] = byte.charCodeAt(i);
    let byteArray = new Uint8Array(byteN);
    let blop = new Blob([byteArray], {type: this.data1.image.substring(this.data1.image.indexOf(":")+1, this.data1.image.indexOf(";"))});
    this.image = blop;
    console.log(this.image);
    this.fileChange(u_tags, u_mentions, u_filters);
  }

  showCam() {
    let nav = <any>navigator;
    nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkitGetUserMedia;
    nav.getUserMedia(
      {video: true},
      (stream) => {
        this.webcamStream = stream;
        let webcamUrl = URL.createObjectURL(stream);
        this.videosrc = this.sanitizer.bypassSecurityTrustUrl(webcamUrl);
        this.element.nativeElement.querySelector('video').autoplay = true;
      },
      (err) => console.log(err));
  }

  takePic() {
    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementsByTagName('canvas')[0];
    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      this.data1.image = canvas.toDataURL();
    }
  }

  beforeChange($event) {
    if ($event.nextId === 'webcam') {
      this.showCam();
    }
    if ($event.nextId === 'upload') {
      for (let track of this.webcamStream.getTracks()) { track.stop() }
    }
  }
}
