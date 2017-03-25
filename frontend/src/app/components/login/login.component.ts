import {Component, OnInit, Input}          from "@angular/core";
import { CookieService }              from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { UsersService }               from "app/services/users/users.service";
import {Md5}                          from "ts-md5/dist/md5";
import {SocketIoService}              from "../../shared/SocketIoService";
import {FormBuilder, Validators, FormControl}    from "@angular/forms";
import { ValidationService }          from "app/shared/validation.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [CookieService, Md5, ValidationService]
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    email: ["", Validators.compose([Validators.required, this.validationService.emailValidator])],
    password: ["", Validators.required]
  });

  private error: boolean = false;
  private error_message: string = "";

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private userService: UsersService,
    private socketIoService: SocketIoService,
    private fb: FormBuilder,
    private validationService: ValidationService
  ) {
    if (this._cookieService.get("token"))
      this.router.navigate(["/home"]);
  }

  ngOnInit() {
  }

  doLogin(event) {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.userService.loginUser({EMAIL: this.loginForm.value.email, PASSWORD_HASH: <string><any>Md5.hashStr(this.loginForm.value.password)}).$observable.subscribe(
        res => {
          this._cookieService.put('token', res['token']);
          this._cookieService.put('user_id', res['userId']);
          this.socketIoService.connectWS();
          this.router.navigate(["/home"]);
        },
        err => {
          console.log('err', err);
          this.error = true;
          this.error_message = "Account not found";
        }
      );
    }
    else {
      this.error = true;
      this.error_message = this.validationService.getError(this.loginForm);
    }
  }
}
