import { Injectable }       from '@angular/core';
import {Headers, Http, Request, RequestOptions}    from '@angular/http';
import { CookieService }                           from 'angular2-cookie/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoreApiService {

    private baseUrl = "#";

    constructor(public http: Http, private _cookieService: CookieService) {}

    request(req: any) {
        req.url = this.baseUrl + req.url;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //if (this._cookieService.get('token')) {
        //    var token = this._cookieService.getObject('token');
        //    headers.append('access-token', token['access-token']);
        //    headers.append('client', token['client']);
        //    headers.append('uid', token['uid']);
        //}

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

        };
    }
}
