import {Component, OnInit}                            from "@angular/core";
import {CookieService}                                from "angular2-cookie/core";
import {Router}                                       from "@angular/router";
import {NgbPaginationConfig}                          from "@ng-bootstrap/ng-bootstrap";
import {PicturesService, IPicture, IPictureResponse}  from "app/services/pictures/pictures.service";
import {ConfigService}                                from "app/shared/config";

import {Http, Response, Request}             from "@angular/http";

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

    private http: Http,

  ) {
    if (!this._cookieService.get("token"))
      this.router.navigate(["/login"]);
  }

  ngOnInit() {
    this.picture_url = this.configService.getUrl();

    /*this.socket = io.connect(this.configService.getWSUrl());
    this.socket.on("connect", function() {
      this.socket.emit("authenticate", {token: this._cookieService.get('token')})
        .on('authenticated', function() {
          console.log('okkkkk');
        })
        .on('unauthorized', function(message) {
          console.log('error', message);
        });
    });*/






    /*socket.on('connect', function () {
      socket
        .emit('authenticate', {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudG9uaW5AZ21haWwuY29tIiwidXNlcklkIjoxNCwiaWF0IjoxNDkwMTIxMzA5LCJleHAiOjE0OTAyMDc3MDl9.p3hzQhYyKDMtB6POwNJbqMm_7bqQqusaz1kz7NECVXo"}) //send the jwt
        .on('authenticated', function () {
          socket.emit('message', {name: 'test'}, function(data) {
            console.log('dataaa', data);
          });
        })
        .on('unauthorized', function(msg) {
          console.log("unauthorized: " + JSON.stringify(msg.data));
          throw new Error(msg.data.type);
        });
    });*/

    /*this.socket.on("messages", (data) => console.log('plop', data));
    this.socket.emit('connection', 'tobi', function (data) {
      console.log('ws', data); // data will be 'woot'
    });
    this.socket.emit('join', JSON.stringify({token: this._cookieService.get('token')}), function(data) {
      console.log('data', data);
    });*/
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
        this.totalEntries = res.count;
      },
      err => {
        console.log(err);
      }
    );
  }
}
