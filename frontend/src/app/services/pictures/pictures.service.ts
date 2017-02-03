import { Injectable } from '@angular/core';

import { ApiService }        from 'app/services/api/api.service';


@Injectable()
export class PicturesService {

  constructor(
    private coreApiService: ApiService,
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
      url: url,
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

  format_pucture(pics) {
    if (!pics.length)
      pics.timeSince = this.timeSince(pics.createdDate);
    else {
      for(var i = 0; i < pics.length; i++){
        pics[i].timeSince = this.timeSince(pics[i].createdDate);
      }
    }
    return(pics);
  }
}
