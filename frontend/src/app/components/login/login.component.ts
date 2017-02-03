import { Component, OnInit } from '@angular/core';
import { CookieService }      from 'angular2-cookie/core';
import { Router }               from '@angular/router';

import { UsersService }      from 'app/services/users/users.service';
import { GlobalEventManagerService }  from "app/services/globalEventManager/global-event-manager.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CookieService, UsersService, GlobalEventManagerService]
})
export class LoginComponent implements OnInit {
  public token: string = "";

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private userService: UsersService,
    private globalEventsManager: GlobalEventManagerService
  ) {
    if (this._cookieService.get('token'))
      this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  login() {
    this.userService.who_im_i(this.token).then(data => {
      this._cookieService.putObject('token', data);
      this.router.navigate(['/home']);
    })
  }

}
