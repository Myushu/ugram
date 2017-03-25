import { Component, OnInit, ViewChild }              from "@angular/core";
import {CookieService}                    from "angular2-cookie/core";
import {Router}                           from "@angular/router";
import {UsersService, IUserResponse}      from "app/services/users/users.service";
import {Http, Headers, RequestOptions}    from "@angular/http";
import {Observable}                       from "rxjs";
import {ConfigService}                    from "app/shared/config";
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
  providers: [ConfigService]
})
export class UploadComponent implements OnInit {
  public tags = [];
  public mentions = [];
  public desc: string = "";
  public image;

  public error: boolean = false;
  public error_message: string = "";
  public data1:any;
  public cropperSettings1:CropperSettings;
  croppedWidth:number;
  croppedHeight:number;
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private usersService: UsersService,
    private cs: ConfigService,
    private http: Http
  ) {
  }

  ngOnInit() {

      this.cropperSettings1 = new CropperSettings();

        this.cropperSettings1.canvasWidth = 500;
        this.cropperSettings1.canvasHeight = 300;

        this.cropperSettings1.minWidth = 100;
        this.cropperSettings1.minHeight = 100;

        this.cropperSettings1.rounded = false;
        this.cropperSettings1.preserveSize = true;
        this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

        this.data1 = {};
  }

  changeActionPic(event) {
    console.log('event', event);
    this.image = event;
  }

  cropped(bounds:Bounds) {
    this.croppedHeight =bounds.bottom-bounds.top;
    this.croppedWidth = bounds.right-bounds.left;
  }

  fileChangeListener($event) {
          var image:any = new Image();
          var file:File = $event.target.files[0];
          var myReader:FileReader = new FileReader();
          var that = this;
          myReader.onloadend = function (loadEvent:any) {
              image.src = loadEvent.target.result;
              that.cropper.setImage(image);

          };

          myReader.readAsDataURL(file);
      }

  fileChange(tags, mentions) {
    // let fileList: FileList = this.image.target.files;
    // if(fileList.length > 0) {
      let file: File = this.image;//fileList[0];
      let formData:FormData = new FormData();
      formData.append('upload', file, file.name);
      formData.append('DESCRIPTION', this.desc);
      if (mentions.length > 0)
        formData.append('MENTIONs', JSON.stringify(mentions));
      if (tags.length > 0)
        formData.append('HASHTAGs', JSON.stringify(tags));
      let headers = new Headers();
      headers.append('Authorization', 'Bearer ' + this._cookieService.get('token'));
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
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
    //}
  }

  getBase64Image(base64string) {
    return base64string.replace(/^data:image\/(.+);base64,/, "");
}

  uploadPicture() {
    const user_id = this._cookieService.getObject("user_id");
    let u_tags = [];
    let u_mentions = [];
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
    var byteArray = new Uint8Array(byteN);
    var blop = new Blob([byteArray], {type: this.data1.image.substring(this.data1.image.indexOf(":")+1, this.data1.image.indexOf(";"))});
    this.image = blop;
    this.fileChange(u_tags, u_mentions);
  }
}
