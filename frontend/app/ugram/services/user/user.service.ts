import { EventEmitter, Injectable }     from "@angular/core";

import { CoreApiService }        from 'app/ugram/services/api/core.api.service';

@Injectable()
export class UserService {

    constructor(
        private coreApiService: CoreApiService,
    ) {

    }

    get_users() {
        var req = {
            method: "GET",
            url: CoreApiService.getRoute().user.get_users
        };

        return new Promise((resolve, reject) => {
            this.coreApiService.request(req).then(data => {
                var json = JSON.parse(<string>((<any>data)._body));
                resolve(json);
            });
        });
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

    update_user(user_id, user, token) {
        var url = CoreApiService.getRoute().user.update_user;
        var url = url.replace("{user_id}", user_id);
        var req = {
            method: "PUT",
            url: url,
            data: JSON.stringify(user),
            token: token
        };

        return new Promise((resolve, reject) => {
            this.coreApiService.request(req).then(data => {
                var json = JSON.parse(<string>((<any>data)._body));
                resolve(json);
            })
        })
    }

    who_im_i(token) { //TO DELETE
        var users;
        return new Promise((resolve, reject) => {
            this.get_users().then(data => {
                for (var i = 0; i < data['totalEntries']; i++) {
                    console.log('u', data['items'][i]);
                    var user = {
                        "email": data['items'][i]['email'],
                        "firstName": data['items'][i]['firstName'],
                        "lastName": data['items'][i]['lastName'],
                        "phoneNumber": data['items'][i]['phoneNumber']
                    };
                    this.update_user(data['items'][i]['id'], user, token).then(data => {
                        if (data['id'])
                            resolve(data);
                    });
                }
            })
        });
    }
}