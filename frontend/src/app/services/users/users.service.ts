import {Injectable}                                     from "@angular/core";
import {RequestMethod}                                  from "@angular/http";
import {ResourceAction, ResourceMethod, ResourceParams} from "ng2-resource-rest";
import {RestClient}                                     from "app/shared/rest-client";

interface IQueryInput {
  page?: number;
  perPage?: number;
}

interface IQueryLogin {
  EMAIL: string;
  PASSWORD_HASH: string;
}

interface IQueryCreateUser {
  FIRSTNAME?: string;
  LASTNAME?: string;
  PSEUDO?: string;
  EMAIL?: string;
  PASSWORD_HASH?: string;
  SEXE?: string;
  PICTURE_PATH?: string;
  COUNTRY_PHONE_CODE?: string;
  PHONE_NUMBER?: string;
  DATE_BIRTHDAY?: any;
}

// Output
interface IUserShort {
  ID_USER: number;
  FIRSTNAME: string;
  LASTNAME: string;
  PSEUDO: string;
  PICTURE_PATH: string;
  SEXE: string;
}

export interface IUser extends IUserShort {
  EMAIL: string;
  COUNTRY_PHONE_CODE?: string;
  PHONE_NUMBER?: string;
  DATE_BIRTHDAY: any;
}

interface IUserMini {
  ID_USER: number;
  FIRSTNAME: string;
  LASTNAME: string;
  PSEUDO: string;
}

@Injectable()
@ResourceParams({
  url: "/users"
})
export class UsersService extends RestClient {

  @ResourceAction({
    isArray: true,
    path: "/"
  })
  getUsers: ResourceMethod<IQueryInput, IUserShort[]>;

  @ResourceAction({
    path: "/{!id}"
  })
  getUser: ResourceMethod<{id: number}, IUser>;

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/signup"
  })
  createUser: ResourceMethod<IQueryCreateUser, IUser>;

  @ResourceAction({
    method: RequestMethod.Put,
    path: "/{!ID_USER}"
  })
  updateUser: ResourceMethod<IUser, any>;

  @ResourceAction({
    method: RequestMethod.Delete,
    path: "/{!id}"
  })
  deleteUser: ResourceMethod<{id: number}, IUser>;

  @ResourceAction({
    method: RequestMethod.Post,
    path: "/login"
  })
  loginUser: ResourceMethod<IQueryLogin, string>;
}








/*import { Injectable } from "@angular/core";

import { ApiService }        from "app/services/api/api.service";

@Injectable()
export class UsersService {

  constructor(
    private coreApiService: ApiService,
  ) {

  }

  get_users(page_size, page) {
    let req = {
      method: "GET",
      url: this.coreApiService.getRoute().user.get_users + "?page=" + page + "&perPage=" + page_size
    };

    return new Promise((resolve, reject) => {
      this.coreApiService.request(req).then(data => {
        const json = JSON.parse(<string>((<any>data)._body));
        resolve(json);
      });
    });
  }

  get_user(user_id) {
    let url = this.coreApiService.getRoute().user.get_user;
    let url = url.replace("{user_id}", user_id);
    let req = {
      method: "GET",
      url: url
    };
    return new Promise((resolve, reject) => {
      this.coreApiService.request(req).then(data => {
        const json = JSON.parse(<string>((<any>data)._body));
        resolve(json);
      });
    });
  }

  update_user(user_id, user, token) {
    let url = this.coreApiService.getRoute().user.update_user;
    let url = url.replace("{user_id}", user_id);
    let req = {
      method: "PUT",
      url: url,
      data: JSON.stringify(user),
      token: token
    };

    return new Promise((resolve, reject) => {
      this.coreApiService.request(req).then(data => {
        const json = JSON.parse(<string>((<any>data)._body));
        resolve(json);
      });
    });
  }

  who_im_i(token) { // TO DELETE
    let users;
    return new Promise((resolve, reject) => {
      this.get_users(999, 0).then(data => {
        for (let i = 0; i < data["totalEntries"]; i++) {
          console.log("u", data["items"][i]);
          let user = {
            "email": data["items"][i]["email"],
            "firstName": data["items"][i]["firstName"],
            "lastName": data["items"][i]["lastName"],
            "phoneNumber": data["items"][i]["phoneNumber"]
          };
          this.update_user(data["items"][i]["id"], user, token).then(data => {
            if (data["id"])
              resolve(data);
          });
        }
      });
    });
  }*/
