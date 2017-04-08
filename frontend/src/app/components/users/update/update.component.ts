import { Component, OnInit }  from "@angular/core";
import {CookieService}        from "angular2-cookie/core";
import { Router }             from "@angular/router";
import {UsersService, IUser}  from "app/services/users/users.service";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.scss"],
})
export class UpdateComponent implements OnInit {
  public lastname;
  public firstname;
  public email;
  public gender;
  public pseudo;
  public picturePath;
  public error: boolean = false;
  public error_message: string = "";
  private user: IUser = <IUser>{};

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private userService: UsersService
  ) {

  }

  ngOnInit() {
    this.userService.getUser({id: <number><any>this._cookieService.get('user_id')}).$observable.subscribe(
      (res: IUser) => {
        this.user = res;
        this.email = this.user.EMAIL;
        this.lastname = this.user.LASTNAME;
        this.firstname = this.user.FIRSTNAME;
        this.gender = this.user.SEXE;
        this.pseudo = this.user.PSEUDO;
        this.picturePath = this.user.PICTURE_PATH;
      }
    );
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

  submitUpdate() {
    this.userService.updateUser({LASTNAME: this.lastname, FIRSTNAME: this.firstname, EMAIL: this.email, SEXE: this.gender, PSEUDO: this.pseudo, ID_USER: this.user.ID_USER, PICTURE_PATH: this.picturePath}).$observable.subscribe(
      res => {
        this.router.navigate(['/profile']);
      },
      err => {
        let error = JSON.parse(err._body);
        this.error = true;
        this.error_message = "Error with the field  " + error['path'];
      }
    );
  }
}
