import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }               from '@angular/router';

import { PicturesService }  from 'app/services/pictures/pictures.service';
import { UsersService }      from 'app/services/users/users.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  providers: [PicturesService, UsersService]
})
export class DiscoverComponent implements OnInit {
  public users: Object[] = [];
  public images = [];

  constructor (
    private router: Router,
    private userService: UsersService,
    private picturesService: PicturesService,
    private Route:ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.userService.get_users().then(res => {
      this.users = res['items'];
      console.log(this.users);
    });
  }
}
