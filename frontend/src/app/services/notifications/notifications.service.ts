import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";

export interface IQueryInput {
  page?: number;
  perPage?: number;
}

export interface INotifResponse {
  ID_PICTURE: number;
  ID_USER: number;
  MESSAGE: string;
}

export interface INotif {
  ID_PICTURE: number;
  ID_USER: number;
  MESSAGE: string;
}

export interface INotifResponse {
  count: number;
  rows: INotif[];
}

@Injectable()
@ResourceParams({
  url: "/notification"
})
export class NotificationsService extends RestClient {

  @ResourceAction({
    path: "/"
  })
  getNotifications: ResourceMethod<IQueryInput, INotifResponse>;
}
