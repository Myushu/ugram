import { Component, OnInit }          from "@angular/core";
import { CookieService }              from "angular2-cookie/core";
import { Router, ActivatedRoute }     from "@angular/router";
import {PicturesService, IPicture}    from "app/services/pictures/pictures.service";
import {
  UsersService, IUser,
  IUserResponse
}                                     from "app/services/users/users.service";
import {UsersPicturesService}         from "app/services/users-pictures/users-pictures.service";
import {IHashtagPicture}              from "app/services/hashtags/hashtags.service";
import {IMentionPicture}              from "app/services/mentions/mentions.service";
import {ICommentPicture}              from "app/services/comments/comments.service";
import {IReactionPicture, ReactionsService}             from "app/services/reactions/reactions.service";
import {ConfigService}                from "app/shared/config";

@Component({
  selector: "app-picture",
  templateUrl: "./picture.component.html",
  styleUrls: ["./picture.component.scss"],
  providers: [ConfigService]
})
export class PictureComponent implements OnInit {
  public req_userID: number;
  public req_pictureID: number;
  public my_user_id: number;
  public tags: IHashtagPicture[];
  public mentions: IMentionPicture[];
  public comments: ICommentPicture[];
  public reactions: IReactionPicture[];
  public reactionsNbr: number;
  public image: IPicture = <IPicture>{};
  public user: IUser = <IUser>{};
  public users = [];
  public updated: number = 0;
  public picture_url: string;
  public isLiked: boolean;

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private picturesService: PicturesService,
    private Route: ActivatedRoute,
    private usersService: UsersService,
    private usersPicturesService: UsersPicturesService,
    private reactionsService: ReactionsService,
    private configService: ConfigService,
  ) {

  }

  checkAlreadyLiked() {
    console.log(this.reactions);
    console.log(this.my_user_id);
    console.log("reaction length: " + this.reactions.length);
    if(this.isLiked)
      console.log("SECOND - is Liked = true");
    else
      console.log("SECOND - is Liked = false");
    if (this.isLiked) {
      this.deleteThumbUp();
    } else {
      this.addThumbUp();
    }

    /*for (let i = 0; i < this.reactions.length; ++i) {
      console.log(this.reactions[i]["ID_USER"]);
      if (this.my_user_id == <number>this.reactions[i]["ID_USER"]) { //if already liked
        console.log(this.reactions[i]["ID_USER"]);
        this.reactionsService.deleteReaction({ID_USER: this.my_user_id, ID_PICTURE: this.image.ID_PICTURE}).$observable.subscribe(
          res => {
            this.reactionsNbr -= 1;
            this.reactions = this.reactions.filter(x => x.ID_USER != this.my_user_id); //on retire l'id_user du like supprimer dans le tbl des reactions
            console.log("like deleted for id_user: " + this.my_user_id);
            this.isLiked = false;
          },
          err => {
            console.log(err);
          }
        );
      }
    }
    if (!this.isLiked) {
      this.isLiked = true;
      this.addThumbUp();
    }*/

    /*if (this.reactions.filter(x => x.ID_USER === this.my_user_id)) { //if user already liked
      console.log("already liked");
      this.reactionsService.deleteReaction({ID_USER: this.my_user_id, ID_PICTURE: this.image.ID_PICTURE}).$observable.subscribe(
        res => {
          this.reactionsNbr -= 1;
          this.reactions = this.reactions.filter(x => x.ID_USER != this.my_user_id); //on retire l'id_user du like supprimer dans le tbl des reactions
          console.log("like deleted for id_user: " + this.my_user_id);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.addThumbUp();
    }*/
  }

  addThumbUp() {
    console.log("liking");
    this.reactionsService.createReaction({ID_USER: this.my_user_id, ID_PICTURE: this.image.ID_PICTURE}).$observable.subscribe(
      res => {
        console.log("liked");
        this.reactionsNbr += 1;
        this.isLiked = true;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteThumbUp() {
    console.log("unliking");
    this.reactionsService.deleteReaction({ID_USER: this.my_user_id, ID_PICTURE: this.image.ID_PICTURE}).$observable.subscribe(
      res => {
        this.reactionsNbr -= 1;
        this.reactions = this.reactions.filter(x => x.ID_USER != this.my_user_id); //on retire l'id_user du like supprimer dans le tbl des reactions
        console.log("like deleted for id_user: " + this.my_user_id);
        this.isLiked = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteImage() {
    this.usersPicturesService.deleteUserPicture({ID_USER: this.user.ID_USER, ID_PICTURE: this.image.ID_PICTURE}).$observable.subscribe(
      res => {
        this.router.navigate(["home"]);
      },
      err => {
        console.log(err);
      }
    );
  }

  changeState() {
    this.updated = 1;
  }

  updateImage() {
    let u_tags = [];
    let u_mentions = [];
    for (let i = 0; i < this.tags.length; i++) {
      u_tags.push({HASHTAG: this.tags[i]["display"]});
    }
    for (let i = 0; i < this.mentions.length; i++) {
      u_mentions.push({ID_USER: this.mentions[i]["value"]});
    }
    this.usersPicturesService.updateUserPicture({ID_USER: this.req_userID, ID_PICTURE: this.req_pictureID, DESCRIPTION: this.image.DESCRIPTION, MENTIONs: u_mentions, HASHTAGs: u_tags}).$observable.subscribe(
      res => {
        this.updated = 0;
      },
      err => {
        console.log('err', err);
      }
    );
  }

  format_hashtag(tags) {
    for (let i = 0; i < tags.length; i++) {
      tags[i].display = tags[i].HASHTAG;
    }
    return(tags);
  }

  format_mention(ment) {
    for (let i = 0; i < ment.length; i++) {
      ment[i].display = ment[i].USER.PSEUDO;
      ment[i].value = ment[i].USER.ID_USER;
    }
    return (ment);
  }

  ngOnInit() {
    this.my_user_id = <number><any>this._cookieService.get('user_id');
    this.picture_url = this.configService.getUrl();
    this.Route.params.subscribe(params => {
      this.req_userID = params["userid"];
      this.req_pictureID = params["id"];
      this.usersService.getUser({id: this.req_userID}).$observable.subscribe(
        (res: IUser) => {
          this.user = res;
        }
      );
      this.usersService.getUsers().$observable.subscribe(
        (res: IUserResponse) => {
          for (let i = 0; i < res.rows.length; i++) {
            this.users.push({display: res.rows[i].PSEUDO, value: res.rows[i].ID_USER});
          }
        }
      );
      this.usersPicturesService.getUserPicture({ID_USER: this.req_userID, ID_PICTURE: this.req_pictureID}).$observable.subscribe(
        (res: IPicture) => {
          console.log(res);
          this.image = this.picturesService.format_picture(res);
          this.tags = this.format_hashtag(this.image.HASHTAGs);
          this.mentions = this.format_mention(this.image.MENTIONs);
          this.reactions = this.image.REACTIONs;
          this.reactionsNbr = this.reactions.length;
          this.isLiked = false;
          console.log(this.my_user_id);
          console.log("number of likes: " + this.reactionsNbr);
          for (let i = 0; i < this.reactions.length; ++i) {
            console.log("user id: " + this.reactions[i]["ID_USER"]);
            if (this.my_user_id == this.reactions[i]["ID_USER"]) {
              console.log("user id: " + this.reactions[i]["ID_USER"] + " already liked ht picture");
              this.isLiked = true;
            }
          }

          if(this.isLiked)
            console.log("FIRST - is Liked = true");
          else
            console.log("FIRST - is Liked = false");
        },
        err => {
          console.log('err', err);
        }
      );
    });
  }

}

