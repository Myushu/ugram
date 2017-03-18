import {Injectable}                                     from "@angular/core";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IUserMini}                                      from "app/services/users/users.service";
import {IReactionPicture}                               from "app/services/reactions/reactions.service";
import {IHashtagPicture}                                from "app/services/hashtags/hashtags.service";
import {ICommentPicture}                                from "app/services/comments/comments.service";
import {IMentionPicture}                                from "app/services/mentions/mentions.service";

// input
export interface IQueryInput {
  page?: number;
  perPage?: number;
}

// output
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

export interface IPictureShort {
  ID_PICTURE: number;
  ID_OWNER: number;
  FILENAME: string;
  DATE_POSTED: Date;
  DESCRIPTION: string;
  MIME_TYPE: string;
}

export interface IPictureResponse {
  count: number;
  rows: IPicture[];
}

@Injectable()
@ResourceParams({
  url: "/pictures"
})
export class PicturesService extends RestClient {

  @ResourceAction({
    path: "/",
  })
  getPictures: ResourceMethod<IQueryInput, IPictureResponse>;

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
    if (!pics.length) {
      let datum = Date.parse(pics.DATE_POSTED);
      pics.timeSince = this.timeSince(datum);
    }
    else {
      for (let i = 0; i < pics.length; i++) {
        pics[i].timeSince = this.timeSince(pics[i].DATE_POSTED);
      }
    }
    return (pics);
  }
}
