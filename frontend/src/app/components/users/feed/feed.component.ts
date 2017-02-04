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
  public page: number = 0;
  public pageSize: number = 20;
  public totalEntries: number = 0;
  public idUser: string = "";

  constructor(
    //private _cookieService:CookieService,
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
    this.Route.params.subscribe(params => {
      this.idUser = params['userid'];
      console.log(this.page);
      this.getUserPicture();
    })
  }

  getUserPicture() {
    this.userService.get_user(this.idUser).then(res => {
      this.user = res;
      this.picturesService.get_user_picture(this.idUser, this.pageSize, this.page - 1).then(res => {
        this.images = res['items'];
        this.images = this.picturesService.format_pucture(this.images);
        this.nb_image = res['totalEntries'];
        this.totalEntries = res['totalEntries'];
      });

    });
  }
}
