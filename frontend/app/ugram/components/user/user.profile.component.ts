import {Component} from "@angular/core";
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { PicturesService }  from 'app/ugram/services/picture/pictures.service';
import { UserService }      from 'app/ugram/services/user/user.service';

@Component({
    selector: "home",
    templateUrl: 'app/ugram/templates/user/profile.component.html',
    providers: [PicturesService, UserService]
})

export class UserProfileComponent  {
    public images = [];
    public user: Object = [];
    public nb_image = 0;

    constructor(
        private _cookieService:CookieService,
        private router: Router,
        private picturesService: PicturesService,
        private userService: UserService,
        private Route:ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.Route.params.subscribe(params => {
            this.userService.get_user(this._cookieService.getObject('token')['id']).then(res => {
                this.user = res;
                console.log(this.user);
                this.picturesService.get_user_picture(this._cookieService.getObject('token')['id']).then(res => {
                    this.images = res['items'];
                    this.images = this.picturesService.format_pucture(this.images);
                    this.nb_image = this.images['length'];
                });
            });
        })
    }

}