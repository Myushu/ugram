import { Component, OnInit }          from "@angular/core";
import { CookieService }              from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { NgbPaginationConfig }        from "@ng-bootstrap/ng-bootstrap";

import {PicturesService, IResponsePicture, IPicture}            from "app/services/pictures/pictures.service";

// TEST LIB
import {UsersService, IUser, IUserShort}                 from "app/services/users/users.service";
import {ResourceModule} from "ng2-resource-rest";
import {UsersPicturesService, IUserPicture} from "app/services/users-pictures/users-pictures.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [CookieService, NgbPaginationConfig]
})
export class HomeComponent implements OnInit {
  public images: IPicture[];
  public page: number = 0;
  public pageSize: number = 20;
  public totalEntries: number = 0;
  public users: IUserShort[];


  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private picturesService: PicturesService,
    // test
    private usersService: UsersService,
    private usersPicturesService: UsersPicturesService
  ) {
    if (!this._cookieService.get("token"))
      this.router.navigate(["/login"]);
  }

  ngOnInit() {
    // test
    /*this.usersService.loginUser({EMAIL: "aljosha@gmail.com", PASSWORD_HASH: "567i2"}, (res: string ) => {
      console.log('t', res['token']);
      this._cookieService.put("token", res["token"]);
      console.log(this._cookieService.get("token"));
      this.usersService.getUsers({}, (res: IUser[]) => {
        console.log("users", res);
      });
    });*/
    // this.usersService.getUser({id: 1}, (res: IUser) => {
    //  console.log("user :", res);
    //  res.LASTNAME = "bouscarel";
    //  res.$save();
    // });

    // this.usersService.createUser({FIRSTNAME: "antonin", LASTNAME: "bouscarel", PSEUDO: "bousca_a", EMAIL: "antonin.bouscarel@epitech.eu", PASSWORD_HASH: "1234", SEXE: "X"}, (res: IUser) => {
    //  console.log("created user :", res);
    // });

    /*this.usersService.getUsers({}, (res: IUserShort[]) => {
      this.user = res;
     });*/

    /*this.usersService.getUser({id: 1}, (res: IUser) => {
      console.log('r', res);
      res.LASTNAME = "jean claude";
      this.usersService.updateUser(res, (res2: IUser) => {
        console.log('r2', res2);
        this.usersService.deleteUser({id: 2}, (res3: IUser) => {
          console.log('r3', res3);
        });
      });
    });*/

    /*this.usersPicturesService.getUserPictures({id: 1}, (res: IUserPicture[]) => {
      console.log(res);
    });*/

  }

  onPager(event: number): void {
    document.body.scrollTop = 0;
    this.page = event - 1;
    this.getPicture();
  }

  getPicture() {
    this.picturesService.getPictures({page: this.page, perPage: this.pageSize}, (res: IResponsePicture) => {
      this.images = this.picturesService.format_picture(res.items);
      this.totalEntries = res.totalEntries;
    });
  }
}
