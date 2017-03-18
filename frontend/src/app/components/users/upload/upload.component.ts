import { Component, OnInit }              from "@angular/core";
import {CookieService}                    from "angular2-cookie/core";
import {Router}                           from "@angular/router";
import {UsersService, IUserResponse}      from "app/services/users/users.service";
import {Http, Headers, RequestOptions}    from "@angular/http";
import {Observable}                       from "rxjs";
import {ConfigService}                    from "app/shared/config";

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

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private usersService: UsersService,
    private cs: ConfigService,
    private http: Http
  ) {
  }

  ngOnInit() {
  }

  changeActionPic(event) {
    this.image = event;
  }

  fileChange(tags, mentions) {
    let fileList: FileList = this.image.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
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
          error => console.log(error)
        );
    }
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
    this.fileChange(u_tags, u_mentions);
  }
}
