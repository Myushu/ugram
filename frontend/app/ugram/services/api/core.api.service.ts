import { Injectable }       from '@angular/core';
import {Headers, Http, Request, RequestOptions}    from '@angular/http';
import { CookieService }                           from 'angular2-cookie/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoreApiService {

    private baseUrl = "http://api.ugram.net";

    constructor(public http: Http, private _cookieService: CookieService) {}

    request(req: any) {
        req.url = this.baseUrl + req.url;

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (req.token)
            headers.append('Authorization', 'Bearer '+req.token);
        var request = new RequestOptions({
            method: req.method,
            url: req.url,
            headers: headers,
        });

        if (req.data)
            request.body = req.data;

        return this.http.request(new Request(request))
            .toPromise()
            .then(res => res)
            .catch(res => res);
    }

    static getRoute() {
        return {
            pictures: {
                get_pictures: "/pictures",
                get_user_pictures: "/users/{user_id}/pictures/",
                get_user_picture: "/users/{user_id}/pictures/{picture_id}",
            },
            user: {
                get_user: "/users/{user_id}",
                get_users: "/users/",
                update_user: "/users/{user_id}"
            }
        };
    }
}
