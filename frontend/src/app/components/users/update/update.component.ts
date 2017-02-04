import { Component, OnInit } from '@angular/core';
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { UsersService }      from 'app/services/users/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [UsersService]
})
export class UpdateComponent implements OnInit {
  public UserSurName;
  public UserName;
  public UserTel;
  public UserEmail;
  private user;

  constructor(
    private _cookieService:CookieService,
    private router: Router,
    private userService: UsersService,
    private Route:ActivatedRoute
  ) {

  }

  ngOnInit() {

    this.user = this._cookieService.getObject('token');
    console.log(this.user);
    this.UserSurName = this.user['lastName'];
    this.UserName = this.user['firstName'];
    this.UserTel = this.user['phoneNumber'];
    this.UserEmail = this.user['email'];
  }

  submitUpdate() {
    var userUpdate = {
      'lastName' : this.UserSurName,
      'firstName' : this.UserName,
      'phoneNumber' : this.UserTel,
      'email' : this.UserEmail
    };

    this.userService.update_user(this.user['id'], userUpdate, "353aac98-0fed-42aa-afcf-e7228f06ed53").then(res => {
      this.router.navigate(['/profile']);
    })

  }
}
