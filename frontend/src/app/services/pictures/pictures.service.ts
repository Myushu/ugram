import { EventEmitter, Injectable }     from "@angular/core";

import { ApiService }        from 'app/services/api/api.service';
import {Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {CookieService} from "angular2-cookie/services/cookies.service";
import { FileUploader } from 'ng2-file-upload';

@Injectable()
export class PicturesService {

    constructor(
        private coreApiService: ApiService,
        private _cookieService:CookieService,
    ) {

    }

  get_pictures(page_size, page) {
    var req = {
      method: "GET",
      url: this.coreApiService.getRoute().pictures.get_pictures + '?page=' + page + '&perPage='+page_size ,
    };
    return new Promise((resolve, reject) => {
      this.coreApiService.request(req).then(data => {


        var json = JSON.parse(<string>((<any>data)._body));
        resolve(json);
      })
    })

  }

    get_picture(user_id, image_id) {
        var url = this.coreApiService.getRoute().pictures.get_user_picture;
        var url = url.replace("{user_id}", user_id);
        var url = url.replace("{picture_id}", image_id);
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

    get_user_picture(user_id) {
        var url = this.coreApiService.getRoute().pictures.get_user_pictures;
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

    timeSince(date) {
        var seconds = Math.floor((+new Date() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }

    format_picture(pics) {
        if (!pics.length)
            pics.timeSince = this.timeSince(pics.createdDate);
        else {
            for(var i = 0; i < pics.length; i++){
                pics[i].timeSince = this.timeSince(pics[i].createdDate);
            }
        }
        return(pics);
    }

    upload_picture(event) {
        var user_id = this._cookieService.getObject('token')['id'];
        var fileList: FileList = event.target.files;
        var file: File = fileList[0];
        var formData: FormData = new FormData();
        if (fileList.length > 0) {
            var url = this.coreApiService.getRoute().pictures.get_user_pictures;
            var url = url.replace("{user_id}", user_id);
            formData.append('uploadFile', file, file.name);
            var req = {
                method: "POST",
                url: url,
                //header: {'Content-Type': 'multipart/form-data', 'Accept': 'multipart/form-data'},
                header: {'Content-Type': undefined},
                body: formData,
            }

            return new Promise((resolve, reject) => {
                this.coreApiService.request(req).then(data => {
                    var json = JSON.parse(<string>((<any>data)._body));
                    resolve(json);
                });
            });
            //
            // let file: File = fileList[0];
            // let formData: FormData = new FormData();
            // formData.append('uploadFile', file, file.name);
            // let headers = new Headers();
            // headers.append('Content-Type', 'multipart/form-data');
            // headers.append('Accept', 'application/json');
            // let options = new RequestOptions({headers: headers});
            // this.http.post(CoreApiService.getRoute().pictures.post_pictures, formData, options)
            //     .map(res => res.json())
            //     .catch(error => Observable.throw(error))
            //     .subscribe(
            //         data => console.log('success'),
            //         error => console.log(error)
            //     )
        }
    }
}
