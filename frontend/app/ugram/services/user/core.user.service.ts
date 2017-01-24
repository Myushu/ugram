import { Injectable }       from '@angular/core';
import { CookieService }      from 'angular2-cookie/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { CoreApiService } from 'app/ugram/services/api/core.api.service';

@Injectable()
export class CoreUserService {
    constructor(
        private coreApiService: CoreApiService,
        private _cookieService:CookieService,
        private router: Router
    ) {}

    Signin(email, password) {
        var req = {
            method: "POST",
            //url: CoreApiService.getRoute().user.sign_in,
            data: `email=${email}&password=${password}`,
        };

        return new Promise((resolve, reject) => {
            this.coreApiService.request(req).then(data => {
                if (data.ok == true) {
                    console.log(data);
                    var token = {
                        'access-token' : data.headers.get('access-token'),
                        'client': data.headers.get('client'),
                        'uid': data.headers.get('uid')
                    };

                    this._cookieService.putObject('type_user', JSON.parse((<any> data)._body).type_user);
                    this._cookieService.putObject('token', token);
                    resolve(true);
                }
                else
                    resolve(false);

            });
        });
    }

    Signup(email, password, confirm) {
        var req = {
            method: "POST",
            //surl: CoreApiService.getRoute().user.sign_up,
            data: `email=${email}&password=${password}&password_confirmation=${confirm}`,
        };

        return new Promise((resolve, reject) => {
            this.coreApiService.request(req).then(data => {
                resolve(data);
            })
        });
    }

    isLogIn() {
        if (this._cookieService.get('token'))
            return (true);
        return (false);
    }

    check(superadmin = 0) {
        if (!this.isLogIn())
            this.router.navigate(['/signin'])
    }
}