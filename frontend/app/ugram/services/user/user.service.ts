import { EventEmitter, Injectable }     from "@angular/core";

import { CoreApiService }        from 'app/ugram/services/api/core.api.service';

@Injectable()
export class UserService {

    constructor(
        private coreApiService: CoreApiService,
    ) {

    }

    get_user(user_id) {
        var url = CoreApiService.getRoute().user.get_user;
        var url = url.replace("{user_id}", user_id);
        var req = {
            method: "GET",
            url: url
        };
        return new Promise((resolve, reject) => {
            this.coreApiService.request(req).then(data => {
                var json = JSON.parse(<string>((<any>data)._body));
                resolve(json);
            });
        });
    }
}