import {Component} from "@angular/core";
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { PicturesService } from 'app/ugram/services/picture/pictures.service';

@Component({
    selector: "home",
    templateUrl: 'app/ugram/templates/picture/picture.component.html',
    providers: [PicturesService]
})

export class PictureComponent  {
    private image: Object[] = [];
    private userId: number;
    private imageId: number;

    constructor(
        //private _cookieService:CookieService,
        private router: Router,
        private picturesService: PicturesService,
        private Route:ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.Route.params.subscribe(params => {
            this.userId = params['userid'];
            this.imageId = params['id'];
            this.picturesService.get_picture(this.userId, this.imageId).then(res => {
                console.log(res);
                this.image = this.picturesService.format_pucture(res);
                console.log(this.image);
            });
        })
    }

}
