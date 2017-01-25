import {Component} from "@angular/core";
import {CookieService}      from 'angular2-cookie/core';
import { Router }               from '@angular/router';

import { PicturesService } from 'app/ugram/services/picture/pictures.service';
import { UserService }      from 'app/ugram/services/user/user.service';

@Component({
    selector: "home",
    templateUrl: 'app/ugram/templates/home/home.component.html',
    providers: [PicturesService, UserService]
})

export class HomeComponent  {
    private images = [];

    constructor(
        private _cookieService:CookieService,
        private router: Router,
        private picturesService: PicturesService,
        private userService: UserService
    ) {
        if (!this._cookieService.get('token'))
            this.router.navigate(['/login']);
    }

    ngOnInit() {
        this.picturesService.get_pictures().then(res => {
            this.images = res['items'];
            this.images = this.picturesService.format_pucture(this.images);
            console.log(this.images);
        });
    }

}
