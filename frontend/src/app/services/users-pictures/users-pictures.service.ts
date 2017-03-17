import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import
{
  ResourceAction, ResourceMethod,
  ResourceParams, ResourceMethodStrict
}                                                       from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IPicture, IPictureResponse}                     from "app/services/pictures/pictures.service"
import {IHashtagPicture}                                from "app/services/hashtags/hashtags.service"
import {IMentionPicture}                                from "app/services/mentions/mentions.service"

interface IQueryInput {
  page?: number;
  perPage?: number;
  ID_USER: number;
  ID_PICTURE?: number;
}

export interface IQueryCreatePicture {
  FILENAME?: string;
  DESCRIPTION: string;
  ID_USER?: number;
  MENTIONs?: IMentionPicture[];
  HASHTAGs?: IHashtagPicture[];
  ID_PICTURE?: number;
  upload?: any;
}

export interface IUploadTest {
  upload: any;
  DESCRIPTION: string;
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class UsersPicturesService extends RestClient {

  @ResourceAction({
    path: "/{!ID_USER}/pictures"
  })
  getUserPictures: ResourceMethod<IQueryInput, IPictureResponse>;

  @ResourceAction({
    path: "/{!ID_USER}/pictures/{!ID_PICTURE}"
  })
  getUserPicture: ResourceMethod<IQueryInput, IPicture>;

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/{!ID_USER}/pictures"
  })
  createUserPicture: ResourceMethodStrict<IUploadTest, {ID_USER: number}, any>;

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
