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
  public page: number = 0;
  public pageSize: number = 20;
  public totalEntries: number = 0;

  constructor (
    private router: Router,
    private userService: UsersService,
    private picturesService: PicturesService,
    private Route:ActivatedRoute
  ) {
  }

  onPager(event: number): void {
    document.body.scrollTop = 0;
    this.page = event;
    this.getUser();
  }

  ngOnInit() {

  }

  getUser() {
    this.userService.get_users(this.pageSize, this.page).then(res => {
      this.totalEntries = res['totalEntries'];
      this.users = res['items'];
      console.log(this.users);
    });
  }
}
