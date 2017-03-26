import {Component, OnInit, ElementRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-ng2-camera',
  templateUrl: './ng2-camera.component.html',
  styleUrls: ['./ng2-camera.component.scss']
})
export class Ng2CameraComponent implements OnInit {
  public videosrc: any;

  constructor(private sanitizer: DomSanitizer, private element: ElementRef) {
  }

  ngOnInit() {
    this.showCam();
  }

  private showCam() {
    let nav = <any>navigator;

    nav.getUserMedia = nav.getUserMedia || nav.mozGetUserMedia || nav.webkitGetUserMedia;
    nav.getUserMedia(
      {video: true},
      (stream) => {
        let webcamUrl = URL.createObjectURL(stream);
        this.videosrc = this.sanitizer.bypassSecurityTrustUrl(webcamUrl);
        this.element.nativeElement.querySelector('video').autoplay = true;
      },
      (err) => console.log(err));

  }

  takePic() {
    const video = <any>document.getElementsByTagName('video')[0];
    const canvas = <any>document.getElementsByTagName('canvas')[0];
    console.log('video', video);
    if (video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
    }
  }
}

