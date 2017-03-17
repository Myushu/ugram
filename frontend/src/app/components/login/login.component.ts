import { Component, OnInit }          from "@angular/core";
import { CookieService }              from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { UsersService }               from "app/services/users/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [CookieService]
})
export class LoginComponent implements OnInit {
  public email: string;
  public pwd: string;

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
    this.userService.loginUser({EMAIL: this.email, PASSWORD_HASH: this.pwd}).$observable.subscribe(
      res => {
        this._cookieService.put('token', res['token']);
        this._cookieService.put('user_id', res['userId']);
        this.router.navigate(["/home"]);
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
