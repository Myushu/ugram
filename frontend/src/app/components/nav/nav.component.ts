import {Component, OnInit, ViewChild, ViewEncapsulation}          from "@angular/core";
import {CookieService}                from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { FacebookLoginComponent }     from "app/components/facebook-login/facebook-login.component";
import { UsersService }               from "app/services/users/users.service";
import {SocketIoService}              from "app/shared/SocketIoService";
import {NotificationsService, INotifResponse, INotif}         from "app/services/notifications/notifications.service";
import {SearchService, ISearchUsers, ISearchPictures}                from "app/services/search/search.service";
import {IHashtagPicture, IHashtagResponse} from "../../services/hashtags/hashtags.service";
import {TitleService} from "../../shared/title.service";

@Component({
  selector: "navbar",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  providers: [CookieService, FacebookLoginComponent, TitleService]
})
export class NavComponent implements OnInit {
  private search: string = "";
  private socket;
  private notifs: INotif[] = [<INotif>{}];
  private pushNotif: boolean = false;
  private pushNotifNbr: number = 0;

  protected searchAC = [];
  protected searchACTmp = [];


  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private fb: FacebookLoginComponent,
    private userServices: UsersService,
    private notificationsService: NotificationsService,
    private searchService: SearchService,
    private titleService: TitleService,
  ) {
    SocketIoService.getInstance().connectWS();
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
        this.titleService.setTitleNotif(1);
        this.notifs.unshift(message);
      }
    );
  }

  readNotif() {
    this.pushNotif = false;
    this.pushNotifNbr = 0;
    this.titleService.deleteTitleNotif();
  }

  searchAction() {
    if (this.search['value'])
      this.router.navigate(['/search', this.search['value']]);
    else
      this.router.navigate(['/search', this.search]);
  }

  logoutAction() {
    SocketIoService.getInstance().closeSocket();
    SocketIoService.closeInstance();
    this._cookieService.removeAll();
    if (this._cookieService.get('login_facebook') === "1")
      this.fb.onFacebookLogoutClick();
    this.userServices.logoutUser();
    this.router.navigate(["/login"]);
  }

  autocompleteSearch() {
    this.searchACTmp = [];
    this.searchService.searchUsers({INPUT: this.search}).$observable.subscribe(
      (res: ISearchUsers) => {
        for (let i = 0; i < res.rows.length; i++) {
          this.searchACTmp.push({display: res.rows[i].FIRSTNAME + " " + res.rows[i].LASTNAME + " - @" + res.rows[i].PSEUDO, value: res.rows[i].PSEUDO });
        }
        this.searchService.searchDescription({INPUT: this.search}).$observable.subscribe(
          (res: ISearchPictures) => {
            for (let i = 0; i < res.rows.length; i++) {
              this.searchACTmp.push({display: res.rows[i].DESCRIPTION, value: res.rows[i].DESCRIPTION});
            }
            this.searchService.searchAutocompleteHashtag({INPUT: this.search, absolute: false}).$observable.subscribe(
              (res: IHashtagResponse) => {
                for (let i = 0; i < res.rows.length; i++) {
                  this.searchACTmp.push({display: res.rows[i].HASHTAG, value: res.rows[i].HASHTAG});
                }
                this.searchAC = this.searchACTmp;
              },
              err => {
                console.log('err', err);
              }
            );
          },
          err => {
            console.log('err', err);
          }
        );
      },
      err => {
        console.log('err', err);
      }
    );
  }

  doSearch(event) {
    console.log(event);
    this.autocompleteSearch();
  }
}
