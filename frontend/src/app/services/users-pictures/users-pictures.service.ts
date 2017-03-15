import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IPicture}                                       from "app/services/pictures/pictures.service"
import {IHashtagPicture}                                from "app/services/hashtags/hashtags.service"
import {IMentionPicture}                                from "app/services/mentions/mentions.service"
// import {IMentions}                                      from "../mentions/mentions.service";

interface IQueryInput {
  page?: number;
  perPage?: number;
  ID_USER: number;
  ID_PICTURE?: number;
}

export interface IQueryCreatePicture {
  FILENAME: string;
  DESCRIPTION: string;
  ID_USER: number;
  MENTIONs: IMentionPicture[];
  HASHTAGs: IHashtagPicture[];
  ID_PICTURE?: number;
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class UsersPicturesService extends RestClient {

  @ResourceAction({
    isArray: true,
    path: "/{!ID_USER}/pictures"
  })
  getUserPictures: ResourceMethod<IQueryInput, IPicture[]>;

  @ResourceAction({
    path: "/{!ID_USER}/pictures/{!ID_PICTURE}"
  })
  getUserPicture: ResourceMethod<IQueryInput, IPicture>;

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/{!ID_USER}/pictures"
  })
  createUserPicture: ResourceMethod<IQueryCreatePicture, any>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: "/{!ID_USER}/pictures/{!ID_PICTURE}"
  })
  updateUserPicture: ResourceMethod<IQueryCreatePicture, any>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!ID_USER}/pictures/{!ID_PICTURE}"
  })
  deleteUserPicture: ResourceMethod<IQueryInput, any>;
}
