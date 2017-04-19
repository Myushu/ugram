import { Component, OnInit }  from '@angular/core';
import {UsersService, IUser, IQueryCreateUser}       from "app/services/users/users.service";
import { Router }             from "@angular/router";
import { Md5 } from 'ts-md5/dist/md5';
import {FormBuilder, Validators, FormControl}    from "@angular/forms";
import { ValidationService }          from "app/shared/validation.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [Md5, ValidationService]
})
export class RegisterComponent implements OnInit {
  public registerForm = this.fb.group({
    email: ["", Validators.compose([Validators.required, this.validationService.emailValidator])],
    pseudo: ["", Validators.required],
    firstname: ["", Validators.required],
    lastname: ["", Validators.required],
    password: ["", Validators.compose([Validators.required, this.validationService.passwordValidator])],
    password_conf: ["", Validators.compose([Validators.required, this.validationService.passwordValidator])],
    gender: ["X", Validators.required],
  });

  private error: boolean = false;
  private error_message: string = "";

  constructor(
    private usersService: UsersService,
    private router: Router,
    private fb: FormBuilder,
    private validationService: ValidationService
  ) {}

  ngOnInit() {
  }

  register(event) {
    if (this.registerForm.dirty && this.registerForm.valid) {
      let user: IQueryCreateUser = {
        FIRSTNAME: this.registerForm.value.firstname,
        LASTNAME: this.registerForm.value.lastname,
        PSEUDO: this.registerForm.value.pseudo,
        EMAIL: this.registerForm.value.email,
        PASSWORD_HASH: <string><any>Md5.hashStr(this.registerForm.value.password),
        SEXE: this.registerForm.value.gender,
        PICTURE_PATH: "default",
      };

      this.usersService.createUser(user).$observable.subscribe(
        (res: IUser) => {
          this.router.navigate(['/login']);
        },
        err => {
          //let error = JSON.parse(err._body);
          this.error = true;
          this.error_message = "Error with the field  ";
        }
      );
    }
    else {
      this.error = true;
      this.error_message = this.validationService.getError(this.registerForm);
    }
  }
}

