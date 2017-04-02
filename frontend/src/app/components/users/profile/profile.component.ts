import {Component, OnInit}          from "@angular/core";
import {CookieService}              from "angular2-cookie/core";
import {IPicture, IPictureResponse} from "app/services/pictures/pictures.service";
import {UsersService, IUser}        from "app/services/users/users.service";
import {UsersPicturesService}       from "app/services/users-pictures/users-pictures.service";
import {ConfigService}              from "app/shared/config";
import {FacebookLoginComponent}     from "app/components/facebook-login/facebook-login.component";
import {Router}                     from "@angular/router";
import {PicturesService}            from "app/services/pictures/pictures.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  providers: [ConfigService, FacebookLoginComponent]
})
export class ProfileComponent implements OnInit {
  public images: IPicture[] = [<IPicture>{}];
  public user: IUser = <IUser>{};
  public page: number = 0;
  public pageSize: number = 20;
  public totalEntries: number = 0;
  public picture_url: string;

  constructor(
    private _cookieService: CookieService,
    private userService: UsersService,
    private usersPicturesService: UsersPicturesService,
    private configService: ConfigService,
    private fb: FacebookLoginComponent,
    private router: Router,
    private picturesService: PicturesService,
  ) {

  }

  onPager(event: number): void {
    document.body.scrollTop = 0;
    this.getUserPicture();
  }

  ngOnInit() {
    this.picture_url = this.configService.getUrl();
  }

  deleteProfileAction() {
      this.userService.deleteUser({id: <number><any>this._cookieService.get('user_id')}).$observable.subscribe(
        res => {
            this.fb.onFacebookLogoutClick();
            this._cookieService.removeAll();
            this.router.navigate(["/login"]);
        }
      );
  }

  getUserPicture() {
    this.userService.getUser({id: <number><any>this._cookieService.get('user_id')}).$observable.subscribe(
      (res: IUser) => {
        this.user = res;
        if (this.user.PICTURE_PATH === 'default')
          this.user.PICTURE_PATH = this.configService.getUrl() + '/picture?filename=' + this.user.PICTURE_PATH;
      }
    );
    this.usersPicturesService.getUserPictures({ID_USER: <number><any>this._cookieService.get('user_id'), page: this.page, perPage: this.pageSize}).$observable.subscribe(
      (res: IPictureResponse) => {
        this.images = res.rows;
        this.images = this.picturesService.setFilter(this.images);
        this.totalEntries = res.count;
      }
    );
  }

}
