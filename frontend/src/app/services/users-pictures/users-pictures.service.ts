import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
// import {IMentions}                                      from "../mentions/mentions.service";

interface IQueryInput {
  page?: number;
  perPage?: number;
  id: number;
}

export interface IUserPicture {
  ID_PICTURE: number;
  FILENAME: string;
  DATE_POSTED: any;
  DESCRIPTION: string;
  // MENTIONs?: IMentions;
  // RECTIONs: IReactions;
  // HASHTAGs: IHashTags;
  // COMMENTs: IComments;
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class UsersPicturesService extends RestClient {

  @ResourceAction({
    isArray: true,
    path: "/{!id}/pictures"
  })
  getUserPictures: ResourceMethod<IQueryInput, IUserPicture[]>;

  /*@ResourceAction({
    path: "/{!id}"
  })
  getUser: ResourceMethod<{id: any}, IUser>;

  @ResourceAction({
    method: RequestMethod.Post
  })
  createUser: ResourceMethod<IUser, any>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: "/{!id}"
  })
  updateUser: ResourceMethod<IUser, any>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!id}"
  })
  deleteUser: ResourceMethod<{id: any}, any>;*/
}

