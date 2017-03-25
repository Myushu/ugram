import {Component, OnInit}  from "@angular/core";
import {Router}             from "@angular/router";
import {CookieService}      from "angular2-cookie/core";
import {UsersService}       from "app/services/users/users.service";
import {ConfigService}      from "app/shared/config";

declare const FB: any;

@Component({
  selector: "facebook-login",
  templateUrl: "facebook-login.component.html",
})

export class FacebookLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private usersService: UsersService,
    private configService: ConfigService
  ) {
    FB.init({
      appId      : configService.getApiIdFB(),
      cookie     : false,
      xfbml      : true,
      version    : "v2.5"
    });
  }

  onFacebookLoginClick() {
    FB.login(response => {
      this.statusChangeCallback(response);
    }, {scope: 'public_profile,email'});
  }

  onFacebookLogoutClick() {
    FB.logout(response => {
      this.statusChangeCallback(response);
    });
  }

  statusChangeCallback(resp) {
    if (resp.status === "connected") {
      this.usersService.FBLoginUser({TOKEN: resp['authResponse']['accessToken']}, (res: string) => {
        this._cookieService.put('token', res['token']);
        this._cookieService.put('user_id', res['userId']);
        this.router.navigate(['/home']);
      });
    }else if (resp.status === "not_authorized") {
    }else {

    }
  };
  ngOnInit() {}
}
