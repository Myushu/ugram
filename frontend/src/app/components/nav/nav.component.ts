import { Component, OnInit } from '@angular/core';
import {CookieService}      from 'angular2-cookie/core';
import { Router }               from '@angular/router';

import { GlobalEventManagerService }  from "app/services/globalEventManager/global-event-manager.service";


@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [CookieService, GlobalEventManagerService]
})
export class NavComponent implements OnInit {
  showNavBar: boolean = false;

  constructor(
    private globalEventsManager: GlobalEventManagerService,
    private _cookieService:CookieService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  showMenu(){
    return (this._cookieService.get('token'));
  }

  logoutAction(): void {
    this._cookieService.removeAll();
    this.router.navigate(['/login']);
  }

}
