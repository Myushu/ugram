import { Component, OnInit }          from "@angular/core";
import { CookieService }              from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { UsersService }               from "app/services/users/users.service";
import {Md5}                          from "ts-md5/dist/md5";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [CookieService, Md5]
})
export class LoginComponent implements OnInit {
  private email: string;
  private pwd: string;

  private error: boolean = false;
  private error_message: string = "";

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private userService: UsersService,
  ) {
    if (this._cookieService.get("token"))
      this.router.navigate(["/home"]);
  }

  ngOnInit() {
  }

  login() {
    this.userService.loginUser({EMAIL: this.email, PASSWORD_HASH: <string><any>Md5.hashStr(this.pwd)}).$observable.subscribe(
      res => {
        this._cookieService.put('token', res['token']);
        this._cookieService.put('user_id', res['userId']);
        this.router.navigate(["/home"]);
      },
      err => {
        this.error = true;
        this.error_message = "Account not found";
      }
    );
  }
}
