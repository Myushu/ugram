import {Component} from "@angular/core";
import {CookieService}      from 'angular2-cookie/core';
import { Router }               from '@angular/router';

import { GlobalEventsManager }  from "app/ugram/services/globalEventManager/global.event.manager.service";


@Component({
    selector: "navbar",
    templateUrl: 'app/ugram/templates/menu/menu.component.html',
})

export class NavBarComponent  {
    showNavBar: boolean = false;

    constructor(
        private globalEventsManager: GlobalEventsManager,
        private _cookieService:CookieService,
        private router: Router
    ) {
        //if (this._cookieService.get('token'))
        this.showNavBar = true;
        this.globalEventsManager.showNavBar.subscribe((mode)=>{
            this.showNavBar = mode;
        });
    }

    logoutAction(): void {
        this._cookieService.removeAll();
        this.globalEventsManager.showNavBar.emit(false);
        this.router.navigate(['/login']);
    }
}