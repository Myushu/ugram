import {Component} from "@angular/core";
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { UserService }      from 'app/ugram/services/user/user.service';
import { PicturesService }  from 'app/ugram/services/picture/pictures.service';

@Component({
    selector: "userList",
    templateUrl: 'app/ugram/templates/user/discover.component.html',
    providers: [PicturesService, UserService]
})

export class UserListComponent  {
    public UserSurName = String;
    public UserName = String;
    public users: Object[] = [];
    public images: [];

    constructor (
        private _cookieService:CookieService,
        private router: Router,
        private userService: UserService,
        private picturesService: PicturesService,
        private Route:ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.userService.get_users().then(res => {
            this.users = res.items;
            console.log(this.users);
        });
    }
}