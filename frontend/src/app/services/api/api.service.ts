import { Injectable }                               from "@angular/core";
import {Headers, Http, Request, RequestOptions}     from "@angular/http";
import { CookieService }                            from "angular2-cookie/core";

import "rxjs/add/operator/toPromise";

@Injectable()
export class ApiService {

  private baseUrl = "http://api.ugram.net";
  private responseData: any;

  constructor(public http: Http, private _cookieService: CookieService) {
  }

  request(req: any) {
    req.url = this.baseUrl + req.url;

    if (req.header)
      let headers = new Headers(req.header);
    else
      let headers = new Headers();
    if (req.body)
      let body = req.body;
    else
      let body = null;
    headers.append("Content-Type", "application/json");
    if (req.token)
      headers.append("Authorization", "Bearer " + req.token);
    let request = new RequestOptions({
      method: req.method,
      url: req.url,
      headers: headers,
      body: body,
    });

    if (req.data)
      request.body = req.data;
    return this.http.request(new Request(request))
      .toPromise()
      .then(res => res)
      .catch(res => res);
  }

  postWithFile(url: string, postData: any, files: File[]) {

    let headers = new Headers();
    headers.append("Authorization", "Bearer " + this._cookieService.getObject("token")["token"]);
    let formData: FormData = new FormData();
    formData.append("file", files[0], files[0].name);

    if (postData !== "" && postData !== undefined && postData !== null) {
      for (let property in postData) {
        if (postData.hasOwnProperty(property)) {
          formData.append(property, postData[property]);
        }
      }
      const returnReponse = new Promise((resolve, reject) => {
        this.http.post(this.baseUrl + url, formData, {
          headers: headers
        }).subscribe(
          res => {
            this.responseData = res.json();
            resolve(this.responseData);
          },
        );
      });
    }
  }

  getRoute() {
    return {
      pictures: {
        get_pictures: "/pictures",
        get_user_pictures: "/users/{user_id}/pictures",
        get_user_picture: "/users/{user_id}/pictures/{picture_id}",
        delete_user_picture: "/users/{user_id}/pictures/{picture_id}",
        update_user_picture: "/users/{user_id}/pictures/{picture_id}"
      },
      user: {
        get_user: "/users/{user_id}",
        get_users: "/users",
        update_user: "/users/{user_id}"

      }
    };
  }
}
