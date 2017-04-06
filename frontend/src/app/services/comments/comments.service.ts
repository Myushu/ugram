import {Injectable, Injector}                                     from "@angular/core";
import {RequestMethod, Http}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {UsersService, IUserMini}                                      from "app/services/users/users.service"

// input
interface IQueryCreateComment {
  ID_USER: number;
  CONTENT: string;
  ID_PICTURE: number;
}

interface IQueryDeleteComment {
  ID_USER: number;
  CONTENT: string;
  ID_PICTURE: number;
  ID_COMMENT: number;
}

interface IQueryGetComment {
  ID_USER: number;
  ID_PICTURE: number;
}

// output
export interface IComment {
  ID_USER: number;
  CONTENT: string;
  ID_PICTURE: number;
  ID_COMMENT: number;
  DATE_CREATION: Date;
}

export interface ICommentPicture {
  USER: IUserMini;
  CONTENT: string;
  ID_COMMENT: number;
  DATE_CREATION: Date;
}

@Injectable()
@ResourceParams({
  url: "/users",
  withCredentials: true,
})
export class CommentsService extends RestClient {
  public usersService: UsersService;

  constructor(
    http: Http,
    injector: Injector,
  ) {
    super(http, injector);
    this.usersService = new UsersService(http, injector);
  }

  @ResourceAction({
    method: RequestMethod.Post,
    path:"/{!ID_USER}/pictures/{!ID_PICTURE}/comment"
  })
  createComment: ResourceMethod<IQueryCreateComment, IComment>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!ID_USER}/pictures/{!ID_PICTURE}/comment/{!ID_COMMENT}"
  })
  deleteComment: ResourceMethod<IQueryDeleteComment, IComment>;

  @ResourceAction({
    method: RequestMethod.Get,
    isArray: true,
    path: "/{!ID_USER}/pictures/{!ID_PICTURE}/comment"
  })
  getComments: ResourceMethod<IQueryGetComment, ICommentPicture[]>;

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

  format_comment(comments) {
    if (!comments.length) {
      let datum = Date.parse(comments.DATE_CREATION);
      comments.timeSince = this.timeSince(datum);
    }
    else {
      for (let i = 0; i < comments.length; i++) {
        let datum = Date.parse(comments[i].DATE_CREATION);
        comments[i].timeSince = this.timeSince(datum);
      }
    }
    return (comments);
  }

  formatCommentPicturePath(comments) {
    for (let i = 0; i < comments.length; i++)
      this.usersService.formatPicturePath(comments[i].USER);
    return comments;
  }
}
