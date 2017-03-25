import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";
import {IUserMini}                                      from "app/services/users/users.service"

export interface IChat {
  ID_SENDER: number;
  ID_RECEIVER: number;
  DATE_SENDED: Date;
  MESSAGE: string;
}

export interface IChatResponse {
  count: number;
  rows: IChat[];
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class ChatService extends RestClient {

  @ResourceAction({
    path: "/{!ID_USER}/message"
  })
  getChat: ResourceMethod<{ID_USER: number}, IChatResponse>;
}
