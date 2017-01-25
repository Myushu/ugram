import {Component} from "@angular/core";
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { PicturesService }  from 'app/ugram/services/picture/pictures.service';
import { UserService }      from 'app/ugram/services/user/user.service';


@Component({
    selector: "home",
    templateUrl: 'app/ugram/templates/user/upload.component.html',
    providers: [PicturesService, UserService]
})

export class UserUploadComponent  {
    public items = ['Typescript', 'Angular2'];
    constructor(
        private _cookieService:CookieService,
        private router: Router,
        private picturesService: PicturesService,
        private userService: UserService,
        private Route:ActivatedRoute
    ) {

    }

    ngOnInit() {

    }

}