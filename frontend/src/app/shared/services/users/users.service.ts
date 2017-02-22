import { Injectable } from "@angular/core";

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
  }
}
