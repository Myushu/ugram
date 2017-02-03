import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { PicturesService }  from 'app/services/pictures/pictures.service';
import { UsersService }      from 'app/services/users/users.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [PicturesService, UsersService]
})
export class FeedComponent implements OnInit {
  public images = [];
  public user: Object = [];
  public nb_image = 0;

  constructor(
    //private _cookieService:CookieService,
    private router: Router,
    private picturesService: PicturesService,
    private userService: UsersService,
    private Route:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.Route.params.subscribe(params => {
      this.userService.get_user(params['userid']).then(res => {
        this.user = res;
        console.log(this.user);
        this.picturesService.get_user_picture(this.user['id']).then(res => {
          this.images = res['items'];
          this.images = this.picturesService.format_pucture(this.images);
          this.nb_image = this.images['length'];
        });
      });
    })
  }
}
