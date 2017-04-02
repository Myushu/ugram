import {Component, OnInit}            from "@angular/core";
import {ActivatedRoute}               from "@angular/router";
import {IPicture, IPictureResponse}   from "app/services/pictures/pictures.service";
import {UsersService, IUser}          from "app/services/users/users.service";
import {UsersPicturesService}         from "app/services/users-pictures/users-pictures.service";
import {ConfigService}                from "app/shared/config";
import {PicturesService}              from "app/services/pictures/pictures.service";
import {FollowService}                from "app/services/follow/follow.service";

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
  public follow: boolean = false;

  constructor(
    private userService: UsersService,
    private Route: ActivatedRoute,
    private usersPicturesService: UsersPicturesService,
    private configService: ConfigService,
    private picturesService: PicturesService,
    private followService: FollowService,
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
        this.follow = this.user['isFollowed'];
      }
    );
    this.usersPicturesService.getUserPictures({ID_USER: this.user_id, page: this.page, perPage: this.pageSize}).$observable.subscribe(
      (res: IPictureResponse) => {
        this.images = res.rows;
        this.images = this.picturesService.setFilter(this.images);
        this.totalEntries = res.count;
      }
    );
  }

  followAction() {
    this.followService.createReaction({ID_USER: this.user.ID_USER}).$observable.subscribe(
      res => {
        this.user['countFollower'] += 1;
        this.follow = true;
      },
      err => {
        console.log('err', err);
      }
    );
  }

  unfollowAction() {
    this.followService.deleteReaction({ID_USER: this.user.ID_USER}).$observable.subscribe(
      res => {
        this.user['countFollower'] -= 1;
        this.follow = false;
      },
      err => {
        console.log('err', err);
      }
    );

  }
}
