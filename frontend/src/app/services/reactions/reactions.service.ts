import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IUserMini}                                      from "app/services/users/users.service"

//input
interface IQueryCreateReaction {
  ID_USER: number;
  ID_PICTURE: number;
}

interface IQueryDeleteReaction {
  ID_USER: number;
  ID_PICTURE: number;
  ID_REACTION: number;
}

//output

export interface IReaction {
  ID_USER: number;
  ID_PICTURE: number;
}

export interface IReactionPicture {
  ID_USER: number;
  USER: IUserMini;
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class ReactionsService extends RestClient {

  @ResourceAction({
    method: RequestMethod.Post,
    path:"/{!ID_USER}/pictures/{!ID_PICTURE}/reaction"
  })
  createReaction: ResourceMethod<IQueryCreateReaction, IReaction>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!ID_USER}/pictures/{!ID_PICTURE}/reaction/{!ID_REACTION}"
  })
  deleteReaction: ResourceMethod<IQueryDeleteReaction, IReaction>;
}
