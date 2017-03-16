import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {Resource, ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IUserMini}                                      from "app/services/users/users.service";
import {IReactionPicture}                               from "app/services/reactions/reactions.service";
import {IHashtagPicture}                                from "app/services/hashtags/hashtags.service";
import {ICommentPicture}                                from "app/services/comments/comments.service";
import {IMentionPicture}                                from "app/services/mentions/mentions.service";

export interface IQueryInput {
  page?: number;
  perPage?: number;
}

export interface IPicture {
  FILENAME: string;
  DATE_POSTED: Date;
  DESCRIPTION: string;
  ID_PICTURE: number;
  ID_OWNER: number;
  USER: IUserMini;
  REACTIONs: IReactionPicture[];
  MENTIONs: IMentionPicture[];
  HASHTAGs: IHashtagPicture[];
  COMMENTs: ICommentPicture[];
}

@Injectable()
@ResourceParams({
  url: "/pictures"
})
export class PicturesService extends RestClient {

  @ResourceAction({
    path: "/",
    isArray: true
  })
  getPictures: ResourceMethod<IQueryInput, IPicture[]>;

  timeSince(date) {
    let seconds = Math.floor((+new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  format_picture(pics) {
    if (!pics.length)
      pics.timeSince = this.timeSince(pics.createdDate);
    else {
      for (let i = 0; i < pics.length; i++) {
        pics[i].timeSince = this.timeSince(pics[i].createdDate);
      }
    }
    return(pics);
  }

}




/*import { Injectable }     from "@angular/core";
import { CookieService }  from "angular2-cookie/core";
import { ApiService }     from "app/services/api/api.service";

@Injectable()
export class PicturesService {

  constructor(
    private coreApiService: ApiService,
    private _cookieService: CookieService,
  ) {

  }

  get_pictures(page_size, page) {
    let req = {
      method: "GET",
      url: this.coreApiService.getRoute().pictures.get_pictures + "?page=" + page + "&perPage=" + page_size ,
    };
    return new Promise((resolve, reject) => {
      this.coreApiService.request(req).then(data => {


        const json = JSON.parse(<string>((<any>data)._body));
        resolve(json);
      });
    });

  }

  get_picture(user_id, image_id) {
    let url = this.coreApiService.getRoute().pictures.get_user_picture;
    let url = url.replace("{user_id}", user_id);
    let url = url.replace("{picture_id}", image_id);
    let req = {
      method: "GET",
      url: url,
    };

    return new Promise((resolve, reject) => {
      this.coreApiService.request(req).then(data => {
        const json = JSON.parse(<string>((<any>data)._body));
        resolve(json);
      });
    });
  }

  get_user_picture(user_id, page_size, page) {
    let url = this.coreApiService.getRoute().pictures.get_user_pictures + "?page=" + page + "&perPage=" + page_size;
    let url = url.replace("{user_id}", user_id);
    let req = {
      method: "GET",
      url: url
    };

    return new Promise((resolve, reject) => {
      this.coreApiService.request(req).then(data => {
        const json = JSON.parse(<string>((<any>data)._body));
        resolve(json);
      });
    });
  }

  delete_picture(user_id, image_id) {
    let url = this.coreApiService.getRoute().pictures.delete_user_picture;
    let url = url.replace("{user_id}", user_id);
    let url = url.replace("{picture_id}", image_id);
    let req = {
      method: "DELETE",
      url: url,
      token: this._cookieService.getObject("token")["token"]
    };
    return new Promise((resolve, reject) => {
      this.coreApiService.request(req).then(data => {
        const json = JSON.parse(<string>((<any>data)._body));
        resolve(json);
      });
    });
  }

  updateImage(user_id, image_id, body) {
    let url = this.coreApiService.getRoute().pictures.update_user_picture;
    let url = url.replace("{user_id}", user_id);
    let url = url.replace("{picture_id}", image_id);
    let req = {
      method: "PUT",
      url: url,
      token: this._cookieService.getObject("token")["token"],
      data: JSON.stringify(body)
    };
    return new Promise((resolve, reject) => {
      this.coreApiService.request(req).then(data => {
        const json = JSON.parse(<string>((<any>data)._body));
        resolve(json);
      });
    });
  }

  timeSince(date) {
    let seconds = Math.floor((+new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  format_picture(pics) {
    if (!pics.length)
      pics.timeSince = this.timeSince(pics.createdDate);
    else {
      for (let i = 0; i < pics.length; i++) {
        pics[i].timeSince = this.timeSince(pics[i].createdDate);
      }
    }
    return(pics);
  }
}*/
