import { Component, OnInit }  from '@angular/core';
import {UsersService, IUser, IQueryCreateUser}       from "app/services/users/users.service";
import { Router }             from "@angular/router";
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [Md5]
})
export class RegisterComponent implements OnInit {
  private email: string = "";
  private pseudo: string = "";
  private firstname: string = "";
  private lastname: string = "";
  private password: string = "";
  private password_conf: string = "";
  private gender: string = "X";

  private error: boolean = false;
  private error_message: string = "";

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  register() {
    if (this.password === this.password_conf) {
      this.error = false;
      let user: IQueryCreateUser = {
        FIRSTNAME: this.firstname,
        LASTNAME: this.lastname,
        PSEUDO: this.pseudo,
        EMAIL: this.email,
        PASSWORD_HASH: <string><any>Md5.hashStr(this.password),
        SEXE: this.gender,
        PICTURE_PATH: "default",
      };
      this.usersService.createUser(user).$observable.subscribe(
        (res: IUser) => {
          this.router.navigate(['/login']);
        },
        err => {
          let error = JSON.parse(err._body);
          this.error = true;
          this.error_message = "Error with the field  " + error['path'];
        }
      );
    }
    else {
      this.error = true;
      this.error_message = "Password and password confirm are different";
    }

  }

}

