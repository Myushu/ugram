import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IUserMini}                                      from "app/services/users/users.service"

//input
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

//output

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
  url: "/users"
})
export class CommentsService extends RestClient {

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
}
