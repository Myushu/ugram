import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}               from "@angular/router";
import {SearchService, ISearchUsers, ISearchPictures}        from "app/services/search/search.service";
import {ConfigService}    from "app/shared/config";
import {PicturesService} from 'app/services/pictures/pictures.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ConfigService]
})
export class SearchComponent implements OnInit {
  private search: string;
  private picture_url: string;

  private searchUser: ISearchUsers = <ISearchUsers>{};
  private searchDesc: ISearchPictures = <ISearchPictures>{};
  private searchHashtag: ISearchPictures = <ISearchPictures>{};

  constructor(
    private Route: ActivatedRoute,
    private searchService: SearchService,
    private configService: ConfigService,
    private picturesService: PicturesService,
  ) { }

  ngOnInit() {
    this.picture_url = this.configService.getUrl();
    this.Route.params.subscribe(params => {
      this.search = params["search"];
      this.searchService.searchUsers({INPUT: this.search}).$observable.subscribe(
        (res: ISearchUsers) => {
          this.searchUser = res;
        }
      );
      this.searchService.searchDescription({INPUT: this.search}).$observable.subscribe(
        (res: ISearchPictures) => {
          this.searchDesc = res;
          this.searchDesc.rows = this.picturesService.setFilter(this.searchDesc.rows);
        }
      );
      this.searchService.searchHashtag({INPUT: this.search}).$observable.subscribe(
        (res: ISearchPictures) => {
          this.searchHashtag = res;
          this.searchHashtag.rows = this.picturesService.setFilter(this.searchHashtag.rows);
        }
      );
    });
  }
}
