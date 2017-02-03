import { Component, OnInit } from '@angular/core';
import { CookieService }      from 'angular2-cookie/core';
import { Router }               from '@angular/router';

import { PicturesService } from 'app/services/pictures/pictures.service';
import { UsersService }      from 'app/services/users/users.service';

import { GlobalEventManagerService }  from "app/services/globalEventManager/global-event-manager.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CookieService, PicturesService, UsersService, GlobalEventManagerService]
})
export class HomeComponent implements OnInit {
  private images = [];
  private currentPage = 0;

  constructor(
    private _cookieService:CookieService,
    private router: Router,
    private picturesService: PicturesService,
    private userService: UsersService,
    private globalEventsManager: GlobalEventManagerService
  ) {
    if (!this._cookieService.get('token'))
      this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.picturesService.get_pictures(20, this.currentPage).then(res => {
      this.images = res['items'];
      this.images = this.picturesService.format_pucture(this.images);
      console.log(this.images);
    });
  }

}
