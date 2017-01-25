import {Component} from "@angular/core";
import {CookieService}      from 'angular2-cookie/core';
import { Router }               from '@angular/router';

import { UserService }      from 'app/ugram/services/user/user.service';
import { GlobalEventsManager }  from "app/ugram/services/globalEventManager/global.event.manager.service";


@Component({
    selector: "home",
    templateUrl: 'app/ugram/templates/login/login.component.html',
    providers: [UserService]
})

export class LoginComponent  {
    public token: string = "";

    constructor(
        private _cookieService:CookieService,
        private router: Router,
        private userService: UserService,
        private globalEventsManager: GlobalEventsManager
    ) {
        this.globalEventsManager.showNavBar.emit(false);
        if (this._cookieService.get('token'))
            this.router.navigate(['/home']);
    }

    login() {
        this.userService.who_im_i(this.token).then(data => {
            this.globalEventsManager.showNavBar.emit(true);
            this._cookieService.putObject('token', data);
            this.router.navigate(['/home']);
        })
    }
}
