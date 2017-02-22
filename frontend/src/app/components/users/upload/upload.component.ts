import { Component, OnInit }        from "@angular/core";
import {CookieService}              from "angular2-cookie/core";
import { Router }                   from "@angular/router";
import { ApiService }               from "app/services/api/api.service";
import { UsersService }             from "app/services/users/users.service";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  public tags = [];
  public mentions = [];
  public desc: string = "";
  public users = [];
  public image;
  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private usersService: UsersService,
    private apiService: ApiService,
  ) {

  }

  ngOnInit() {
    this.usersService.get_users(9999, 0).then(res => {
      for (let i = 0; i < res["items"].length; i++) {
        this.users.push(res["items"][i]["id"]);
      }
      console.log(this.users);
    });
  }

  changeActionPic(event) {
    this.image = event;
  }

  uploadPicture() {
    console.log("coucou2");
    const user_id = this._cookieService.getObject("token")["id"];
    let postData = {
      description: this.desc,
      mentions: [],
      tags: []
    };
    for (let i = 0; i < this.tags.length; i++) {
      if (this.tags[i]["value"])
        postData.tags.push(this.tags[i]["value"]);
      else
        postData.tags.push(this.tags[i]);
    }
    for (let i = 0; i < this.mentions.length; i++) {
      if (this.mentions[i]["value"])
        postData.mentions.push(this.mentions[i]["value"]);
      else
        postData.mentions.push(this.mentions[i]);
    }
    let url = this.apiService.getRoute().pictures.get_user_pictures;
    let url = url.replace("{user_id}", user_id);

    this.apiService.postWithFile(url, postData, this.image.target.files).then(result => {
      console.log(result);
      this.router.navigate(["home"]);
    });
  }
}
