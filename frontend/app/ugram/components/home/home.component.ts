import {Component, NgZone} from "@angular/core";
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
    private currentPage = 0;

    constructor(
        private lc: NgZone,
        private _cookieService:CookieService,
        private router: Router,
        private picturesService: PicturesService,
        private userService: UserService
    ) {
        if (!this._cookieService.get('token'))
            this.router.navigate(['/login']);
        window.onscroll = () => {
            let windowHeight = "innerHeight" in window ? window.innerHeight
                : document.documentElement.offsetHeight;
            let body = document.body, html = document.documentElement;
            let docHeight = Math.max(body.scrollHeight,
                body.offsetHeight, html.clientHeight,
                html.scrollHeight, html.offsetHeight);
            let windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                console.log('bottom anchor');
                this.currentPage += 1;
                console.log('page', this.currentPage);
                this.picturesService.get_pictures(20, this.currentPage).then(res => {
                    res['items'] = this.picturesService.format_pucture(res['items']);
                    this.images = this.images.concat(res['items']);
                });

            }
            lc.run(() => {
                //this.statusText = status;

            });
        };
    }

    ngOnInit() {
        this.picturesService.get_pictures(20, this.currentPage).then(res => {
            this.images = res['items'];
            this.images = this.picturesService.format_pucture(this.images);
            console.log(this.images);
        });
    }
}
