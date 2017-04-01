import {Component, OnInit}            from "@angular/core";
import {ActivatedRoute}               from "@angular/router";
import {IPicture, IPictureResponse}   from "app/services/pictures/pictures.service";
import {UsersService, IUser}          from "app/services/users/users.service";
import {UsersPicturesService}         from "app/services/users-pictures/users-pictures.service";
import {ConfigService}                from "app/shared/config";
import {PicturesService}              from "app/services/pictures/pictures.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
  providers: [ConfigService]
})
export class FeedComponent implements OnInit {
  public images: IPicture[] = [<IPicture>{}];
  public user: IUser = <IUser>{};
  public page: number = 0;
  public pageSize: number = 20;
  public totalEntries: number = 0;
  public user_id: number;
  public picture_url: string;

  constructor(
    private userService: UsersService,
    private Route: ActivatedRoute,
    private usersPicturesService: UsersPicturesService,
    private configService: ConfigService,
    private picturesService: PicturesService,
  ) {

  }

  onPager(event: number): void {
    document.body.scrollTop = 0;
    this.getUserPicture();
  }

  ngOnInit() {
    this.picture_url = this.configService.getUrl();
    this.Route.params.subscribe(params => {
      this.user_id = params["userid"];
    });
  }

  getUserPicture() {
    this.userService.getUser({id: this.user_id}).$observable.subscribe(
      (res: IUser) => {
        this.user = res;
        if (this.user.PICTURE_PATH === 'default')
          this.user.PICTURE_PATH = this.configService.getUrl() + '/picture?filename=' + this.user.PICTURE_PATH;
        console.log(this.user);
      }
    );
    this.usersPicturesService.getUserPictures({ID_USER: this.user_id, page: this.page, perPage: this.pageSize}).$observable.subscribe(
      (res: IPictureResponse) => {
        this.images = res.rows;
        this.images = this.picturesService.setFilter(this.images);
        console.log('images', this.images);
        this.totalEntries = res.count;
      }
    );
  }
}
