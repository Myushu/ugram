import { Component, OnInit } from '@angular/core';
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { PicturesService }  from 'app/services/pictures/pictures.service';
import { UsersService }      from 'app/services/users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [PicturesService, UsersService]
})
export class ProfileComponent implements OnInit {
  public images = [];
  public user: Object = [];
  public nb_image = 0;

  constructor(
    private _cookieService:CookieService,
    private router: Router,
    private picturesService: PicturesService,
    private userService: UsersService,
    private Route:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.Route.params.subscribe(params => {
      this.userService.get_user(this._cookieService.getObject('token')['id']).then(res => {
        this.user = res;
        console.log(this.user);
        this.picturesService.get_user_picture(this._cookieService.getObject('token')['id']).then(res => {
          this.images = res['items'];
          this.images = this.picturesService.format_picture(this.images);
          this.nb_image = this.images['length'];
        });
      });
    })
  }

}
