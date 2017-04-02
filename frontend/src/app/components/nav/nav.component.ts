import { Component, OnInit }          from "@angular/core";
import {CookieService}                from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { FacebookLoginComponent }     from "app/components/facebook-login/facebook-login.component";
import { UsersService }               from "app/services/users/users.service";
import {SocketIoService}              from "app/shared/SocketIoService";
import {NotificationsService, INotifResponse, INotif}         from "app/services/notifications/notifications.service";

@Component({
  selector: "navbar",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  providers: [CookieService, FacebookLoginComponent]
})
export class NavComponent implements OnInit {
  private search: string;
  private socket;
  private notifs: INotif[] = [<INotif>{}];
  private pushNotif: boolean = false;
  private pushNotifNbr: number = 0;

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private fb: FacebookLoginComponent,
    private userServices: UsersService,
    private notificationsService: NotificationsService,
  ) {
  }

  ngOnInit() {
    this.notificationsService.getNotifications({page: 0, perPage: 10}).$observable.subscribe(
      (res: INotifResponse) => {
        this.notifs = res.rows;
      },
      err => {
        console.log('err', err);
      }
    );

    this.socket = SocketIoService.getInstance().getNotification().subscribe(
      (message: INotif) => {
      this.pushNotif = true;
      this.pushNotifNbr += 1;
      this.notifs.unshift(message);
    });

  }

  readNotif() {
    this.pushNotif = false;
    this.pushNotifNbr = 0;
  }

  searchAction() {
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
