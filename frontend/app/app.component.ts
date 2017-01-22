import { Component } from '@angular/core';
import { Router }               from '@angular/router';

import {CookieService}      from 'angular2-cookie/core';

@Component({
    selector: 'my-app',
    template: `<div id="wrapper">
                <navbar></navbar>
                <router-outlet></router-outlet>
                </div>
                `
})
export class AppComponent {

    constructor(
        private router: Router,
        private _cookieService:CookieService
    ) {
        if (!this._cookieService.get('token'))
            this.router.navigate(['/login']);
    }
}