import {Component} from "@angular/core";
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { UserService }      from 'app/ugram/services/user/user.service';

@Component({
    selector: "update",
    templateUrl: 'app/ugram/templates/user/update.component.html',
    providers: [UserService]
})

export class UserUpdateComponent  {
    public UserSurName;
    public UserName;
    public UserTel;
    public UserEmail;
    private user;

    constructor(
        private _cookieService:CookieService,
        private router: Router,
        private userService: UserService,
        private Route:ActivatedRoute
    ) {

    }

    ngOnInit() {

        this.user = this._cookieService.getObject('token');
        console.log(this.user);
        this.UserSurName = this.user['lastName'];
        this.UserName = this.user['firstName'];
        this.UserTel = this.user['phoneNumber'];
        this.UserEmail = this.user['email'];
    }

    submitUpdate() {
        var userUpdate = {
            'lastName' : this.UserSurName,
            'firstName' : this.UserName,
            'phoneNumber' : this.UserTel,
            'email' : this.UserEmail
        };

        this.userService.update_user(this.user['id'], userUpdate, "353aac98-0fed-42aa-afcf-e7228f06ed53");
    }
}

//this._cookieService.getObject('token')
