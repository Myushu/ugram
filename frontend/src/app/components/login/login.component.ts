import { Component, OnInit }          from "@angular/core";
import { CookieService }              from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { UsersService }               from "app/services/users/users.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [CookieService, UsersService]
})
export class LoginComponent implements OnInit {
  public token: string = "353aac98-0fed-42aa-afcf-e7228f06ed53";

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
    // this.userService.who_im_i(this.token).then(data => {
    //  data["token"] = this.token;
    //  this._cookieService.putObject("token", data);
      this.router.navigate(["/home"]);
    // });
  }
}
