import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";

//input
interface IQueryCreateHashtag {
  ID_USER: number;
  HASHTAG: string;
  ID_PICTURE: number;
}

interface IQueryDeleteHashtag {
  ID_USER: number;
  HASHTAG: string;
  ID_PICTURE: number;
  ID_HASHTAG: number;
}

//output
export interface IHashtag {
  HASHTAG: string;
  ID_PICTURE: number;
}

export interface IHashtagPicture {
  HASHTAG: string;
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class HashtagsService extends RestClient {

  @ResourceAction({
    method: RequestMethod.Post,
    path:"/{!ID_USER}/pictures/{!ID_PICTURE}/hashtag"
  })
  createHashtag: ResourceMethod<IQueryCreateHashtag, IHashtag>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!ID_USER}/pictures/{!ID_PICTURE}/hashtag/{!ID_HASHTAG}"
  })
  deleteHashtag: ResourceMethod<IQueryDeleteHashtag, IHashtag>;
}
