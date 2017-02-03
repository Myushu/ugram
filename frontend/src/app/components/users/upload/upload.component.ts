import { Component, OnInit } from '@angular/core';
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { PicturesService }  from 'app/services/pictures/pictures.service';
import { UsersService }      from 'app/services/users/users.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public items = ['Typescript', 'Angular2'];
  constructor(
    private _cookieService:CookieService,
    private router: Router,
    private picturesService: PicturesService,
    private userService: UsersService,
    private Route:ActivatedRoute
  ) {

  }

  ngOnInit() {

  }
}
