import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IUserMini}                                      from "app/services/users/users.service"

// input
interface IQueryCreateMention {
  ID_USER: number;
  ID_PICTURE: number;
  MY_ID_USER: number;
}

interface IQueryDeleteMention {
  ID_USER: number;
  ID_PICTURE: number;
  ID_MENTION: number;
}

// output
export interface IMention {
  ID_USER: number;
  ID_PICTURE: number;
}

export interface IMentionPicture {
  ID_USER: number;
  USER: IUserMini;
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class MentionsService extends RestClient {

  @ResourceAction({
    method: RequestMethod.Post,
    path:"/{!MY_ID_USER}/pictures/{!ID_PICTURE}/mention"
  })
  createMention: ResourceMethod<IQueryCreateMention, IMention>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!MY_ID_USER}/pictures/{!ID_PICTURE}/mention/{!ID_MENTION}"
  })
  deleteMention: ResourceMethod<IQueryDeleteMention, IMention>;
}
