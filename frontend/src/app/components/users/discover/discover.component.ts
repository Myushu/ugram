import { Component, OnInit }                        from "@angular/core";
import {UsersService, IUserShort, IUserResponse}    from "app/services/users/users.service";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"],
})
export class DiscoverComponent implements OnInit {
  public users: IUserShort[] = [<IUserShort>{}];
  public page: number = 0;
  public pageSize: number = 20;
  public totalEntries: number = 0;

  constructor (
    private userService: UsersService,
  ) {
  }

  onPager(event: number): void {
    document.body.scrollTop = 0;
    this.page = event - 1;
    this.getUser();
  }

  ngOnInit() {

  }

  getUser() {
    this.userService.getUsers({page: this.page, perPage: this.pageSize}).$observable.subscribe(
      (res: IUserResponse) => {
        this.totalEntries = res.count;
        this.users = res.rows;
        this.userService.formatPicturePath(this.users);
      }
    );
  }
}
