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
  public page: number = 0;
  public pageSize: number = 20;
  public totalEntries: number = 0;

  constructor(
    private _cookieService:CookieService,
    private router: Router,
    private picturesService: PicturesService,
    private userService: UsersService,
    private Route:ActivatedRoute
  ) {

  }

  onPager(event: number): void {
    document.body.scrollTop = 0;
    this.getUserPicture();
  }

  ngOnInit() {
  }

  getUserPicture() {
    this.userService.get_user(this._cookieService.getObject('token')['id']).then(res => {
      this.user = res;
      this.picturesService.get_user_picture(this._cookieService.getObject('token')['id'], this.pageSize, this.page - 1).then(res => {
        this.images = res['items'];
        this.images = this.picturesService.format_pucture(this.images);
        this.nb_image = res['totalEntries'];
        this.totalEntries = res['totalEntries'];
      });

    });
  }

}
