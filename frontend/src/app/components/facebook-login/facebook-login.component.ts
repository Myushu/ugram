import {Component, OnInit}  from "@angular/core";
import {Router}             from "@angular/router";
import { CookieService }    from "angular2-cookie/core";
import { UsersService }     from "app/services/users/users.service";

declare const FB: any;

@Component({
  selector: "facebook-login",
  templateUrl: "facebook-login.component.html",
  // directives: [ROUTER_DIRECTIVES]
})

export class FacebookLoginComponent implements OnInit {

  constructor(private router: Router, private _cookieService: CookieService, private usersService: UsersService) {
    FB.init({
      appId      : "280735385694809",
      cookie     : false,  // enable cookies to allow the server to access
      // the session
      xfbml      : true,  // parse social plugins on this page
      version    : "v2.5" // use graph api version 2.5
    });
  }

  onFacebookLoginClick() {
    FB.login(response => {
      this.statusChangeCallback(response);
    }, {scope: 'public_profile,email,user_birthday'});
  }

  onFacebookLogoutClick() {
    FB.logout(response => {
      this.statusChangeCallback(response);
    });
  }

  statusChangeCallback(resp) {
    console.log('fb res', resp);
    if (resp.status === "connected") {
      //this._cookieService.putObject("token", resp.authResponse);
      // this.router.navigate(["/home"]);
      this.usersService.FBLoginUser({TOKEN: resp['authResponse']['accessToken']}, (res: string) => {
        this._cookieService.put('token', res['token']);
        this.router.navigate(['/home']);
      });
    }else if (resp.status === "not_authorized") {
    }else {

    }
  };
  ngOnInit() {
    //FB.getLoginStatus(response => {
    //  this.statusChangeCallback(response);
    //});
  }
}
