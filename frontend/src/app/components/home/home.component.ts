import {Component, OnInit}                            from "@angular/core";
import {CookieService}                                from "angular2-cookie/core";
import {Router}                                       from "@angular/router";
import {NgbPaginationConfig}                          from "@ng-bootstrap/ng-bootstrap";
import {PicturesService, IPicture, IPictureResponse}  from "app/services/pictures/pictures.service";
import {ConfigService}                                from "app/shared/config";

import {Http, Response, Request}             from "@angular/http";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [CookieService, NgbPaginationConfig, ConfigService]
})
export class HomeComponent implements OnInit {
  public images: IPicture[] = [<IPicture>{}];
  public page: number = 0;
  public pageSize: number = 20;
  public totalEntries: number = 0;
  public picture_url: string;



  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private picturesService: PicturesService,
    private configService: ConfigService,
    private sanitizer: DomSanitizer,
    private http: Http,

  ) {
    if (!this._cookieService.get("token"))
      this.router.navigate(["/login"]);
  }

  ngOnInit() {
    this.picture_url = this.configService.getUrl();
  }

  onPager(event: number): void {
    document.body.scrollTop = 0;
    this.page = event - 1;
    this.getPicture();
  }

  getPicture() {
    this.picturesService.getPictures({page: this.page, perPage: this.pageSize}).$observable.subscribe(
      (res: IPictureResponse) => {
        this.images = res.rows;
        console.log(this.images);
        this.images = this.picturesService.setFilter(this.images);
        this.totalEntries = res.count;
      },
      err => {
        console.log(err);
      }
    );
  }
}
