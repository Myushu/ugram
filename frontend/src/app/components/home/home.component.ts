import {Component, OnInit, ViewEncapsulation}                            from "@angular/core";
import {CookieService}                                from "angular2-cookie/core";
import {Router}                                       from "@angular/router";
import {NgbPaginationConfig}                          from "@ng-bootstrap/ng-bootstrap";
import {PicturesService, IPicture, IPictureResponse}  from "app/services/pictures/pictures.service";
import {ConfigService}                                from "app/shared/config";

import {Http, Response, Request}             from "@angular/http";
import {DomSanitizer} from "@angular/platform-browser";
import {IHashtagPicture} from "../../services/hashtags/hashtags.service";

@Component({
  selector: "app-home",
  encapsulation: ViewEncapsulation.None,
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
    if (!this._cookieService.get("user_id"))
      this.router.navigate(["/login"]);
  }

  ngOnInit() {
    this.picture_url = this.configService.getUrl();
  }

  onPager(event: number): void {
    document.body.scrollTop = 0;
    this.page = event - 1;
    if (this._cookieService.get("user_id"))
      this.getPicture();
  }

  format_hashtag(tags) {
    for (let i = 0; i < tags.length; i++) {
      tags[i].display = '#' + tags[i].HASHTAG;
      tags[i].value = tags[i].HASHTAG;
    }
    return(tags);
  }

  getPicture() {
    this.picturesService.getPictures({page: this.page, perPage: this.pageSize}).$observable.subscribe(
      (res: IPictureResponse) => {
        this.images = res.rows;
        this.images = this.picturesService.format_picture(this.images);
        this.images = this.picturesService.setFilter(this.images);
        this.images = this.picturesService.formatImagePicturePath(this.images);
        for (let i = 0; i < this.images.length; i++) {
          this.images[i]['nbrReact'] = this.images[i].REACTIONs.length;
          this.images[i]['tags'] = this.format_hashtag(this.images[i].HASHTAGs);
        }
        this.totalEntries = res.count;
      },
      err => {
        console.log(err);
      }
    );
  }
}
