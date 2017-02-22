import { Component, OnInit }        from "@angular/core";
import { UsersService }             from "app/services/users/users.service";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.component.html",
  styleUrls: ["./discover.component.scss"],
  providers: [UsersService]
})
export class DiscoverComponent implements OnInit {
  public users: Object[] = [];
  public images = [];
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
    this.userService.get_users(this.pageSize, this.page).then(res => {
      console.log(res);
      this.totalEntries = res["totalEntries"];
      this.users = res["items"];
    });
  }
}
