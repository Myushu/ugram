import {Component} from "@angular/core";
import {CookieService}      from 'angular2-cookie/core';
import { Router }               from '@angular/router';

import { PicturesService } from 'app/ugram/services/picture/pictures.service';

@Component({
    selector: "home",
    templateUrl: 'app/ugram/templates/home/home.component.html',
    providers: [PicturesService]
})

export class HomeComponent  {
    private images = [];

    constructor(
        //private _cookieService:CookieService,
        //private router: Router,
        private picturesService: PicturesService,
    ) {

    }

    ngOnInit() {
        this.picturesService.get_pictures().then(res => {
            this.images = res['items'];
            this.images = this.picturesService.format_pucture(this.images);
            console.log(this.images);
        });
    }

}
