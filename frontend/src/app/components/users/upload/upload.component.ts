import { Component, OnInit } from '@angular/core';
import {CookieService}      from 'angular2-cookie/core';
import { Router, ActivatedRoute }               from '@angular/router';
import { ApiService }        from 'app/services/api/api.service';

import { UsersService }      from 'app/services/users/users.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  public items = ['Typescript', 'Angular2'];
  constructor(
    private _cookieService:CookieService,
    private router: Router,
    private userService: UsersService,
    private apiService: ApiService,
    private Route:ActivatedRoute
  ) {

  }

  ngOnInit() {

  }

  uploadPicture(event) {
    console.log("coucou2");
    var user_id = this._cookieService.getObject('token')['id'];
    let postData = {description:"field1"}; // Put your form data variable. This is only example.
    var url = this.apiService.getRoute().pictures.get_user_pictures;
    var url = url.replace("{user_id}", user_id);

    this.apiService.postWithFile(url ,postData,event.target.files).then(result => {
      console.log(result);
    });
  }
}
