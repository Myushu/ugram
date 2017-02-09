import { Component, OnInit } from '@angular/core';
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { PicturesService } from 'app/services/pictures/pictures.service';
import { UsersService }     from 'app/services/users/users.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  providers: [PicturesService, UsersService]
})
export class PictureComponent implements OnInit {
  public tags = [];
  public mentions = [];
  private image: Object[] = [];
  private userId: number;
  private imageId: number;
  public user;
  public updated: number = 0;
  public users = [];

  constructor(
    private _cookieService:CookieService,
    private router: Router,
    private picturesService: PicturesService,
    private Route:ActivatedRoute,
    private usersService: UsersService
  ) {

  }

  deleteImage() {
    this.picturesService.delete_picture(this.userId, this.imageId).then(res => {
      this.router.navigate(['home']);
    });
  }

  changeState() {
    this.updated = 1;
  }

  updateImage() {
    console.log('tags', this.tags);
    console.log('mentions', this.mentions);
    var body = {
      description: this.image['description'],
      mentions: [],
      tags: []
    };

    for(var i = 0; i < this.tags.length; i++) {
      if (this.tags[i]['value'])
        body.tags.push(this.tags[i]['value']);
      else
        body.tags.push(this.tags[i])
    }
    for(var i = 0; i < this.mentions.length; i++) {
      if (this.mentions[i]['value'])
        body.mentions.push(this.mentions[i]['value'])
      else
        body.mentions.push(this.mentions[i])
    }
    this.picturesService.updateImage(this.userId, this.imageId, body).then(res => {
      this.image = this.picturesService.format_picture(res);
      this.updated = 0;
    })
  }

  ngOnInit() {
    this.user = this._cookieService.getObject('token');
    console.log('user', this.user);
    this.Route.params.subscribe(params => {
      this.userId = params['userid'];
      this.imageId = params['id'];
      this.picturesService.get_picture(this.userId, this.imageId).then(res => {
        console.log(res);
        this.image = this.picturesService.format_picture(res);
        this.tags = this.image['tags'];
        this.mentions = this.image['mentions'];
        this.usersService.get_users(9999, 0).then(res => {
          for(var i = 0; i < res['items'].length; i++) {
            this.users.push(res['items'][i]['id']);
          }
        });
        console.log(this.users);
      });
    })
  }

}

