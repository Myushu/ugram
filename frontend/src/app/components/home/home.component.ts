import { Component, OnInit }          from "@angular/core";
import { CookieService }              from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { NgbPaginationConfig }        from "@ng-bootstrap/ng-bootstrap";

import { PicturesService }            from "app/services/pictures/pictures.service";
import { UsersService }               from "app/services/users/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [CookieService, PicturesService, UsersService, NgbPaginationConfig]
})
export class HomeComponent implements OnInit {
  private images = [];
  public page: number = 0;
  public pageSize: number = 20;
  public totalEntries: number = 0;


  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private picturesService: PicturesService,
  ) {
    if (!this._cookieService.get("token"))
      this.router.navigate(["/login"]);
  }

  ngOnInit() {
  }

  onPager(event: number): void {
    document.body.scrollTop = 0;
    this.page = event - 1;
    this.getPicture();
  }

  getPicture() {
    this.picturesService.get_pictures(this.pageSize, this.page).then(res => {
      this.totalEntries = res["totalEntries"];
      this.images = res["items"];
      this.images = this.picturesService.format_picture(this.images);
    });
  }
}
