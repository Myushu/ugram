import { EventEmitter, Injectable }     from "@angular/core";

import { CoreApiService }        from 'app/ugram/services/api/core.api.service';

@Injectable()
export class PicturesService {

    constructor(
        private coreApiService: CoreApiService,
    ) {

    }

    get_pictures() {
        var req = {
            method: "GET",
            url: CoreApiService.getRoute().pictures.get_pictures,
        };

        return new Promise((resolve, reject) => {
            this.coreApiService.request(req).then(data => {


                var json = JSON.parse(<string>((<any>data)._body));
                resolve(json);
            })
        })

    }
}