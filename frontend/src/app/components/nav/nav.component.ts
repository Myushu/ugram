import { Component, OnInit }          from "@angular/core";
import {CookieService}                from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { FacebookLoginComponent }     from "app/components/facebook-login/facebook-login.component";
import { UsersService }               from "app/services/users/users.service";
import {SocketIoService}              from "app/shared/SocketIoService";

@Component({
  selector: "navbar",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  providers: [CookieService, FacebookLoginComponent]
})
export class NavComponent implements OnInit {
  private search: string;
  private socket;

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private fb: FacebookLoginComponent,
    private userServices: UsersService,
  ) {
  }

  ngOnInit() {
    /*this.socket = this.socketIoService.getNotification().subscribe(message => {
      console.log('message', message);
    })*/

    this.socket = SocketIoService.getInstance().getNotification().subscribe(message => {
      console.log('message', message);
    });

  }

  searchAction() {
    console.log('bonjour');
    console.log('search', this.search);
    this.router.navigate(['/search', this.search]);
  }

  showMenu() {
    return (this._cookieService.get("token"));
  }

  logoutAction() {
    this.fb.onFacebookLogoutClick();
    this._cookieService.removeAll();
    this.userServices.logoutUser();
    this.router.navigate(["/login"]);
  }
}
