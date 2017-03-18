import { Component, OnInit }          from "@angular/core";
import {CookieService}                from "angular2-cookie/core";
import { Router }                     from "@angular/router";
import { FacebookLoginComponent }     from "app/components/facebook-login/facebook-login.component";
import {ISearchUsers, ISearchPictures} from "app/services/search/search.service";
import {SearchService}                  from "app/services/search/search.service";

@Component({
  selector: "navbar",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  providers: [CookieService, FacebookLoginComponent]
})
export class NavComponent implements OnInit {
  showNavBar: boolean = false;
  private search: string;

  private searchUser: ISearchUsers = <ISearchUsers>{};
  private searchDesc: ISearchPictures = <ISearchPictures>{};
  private searchHashtag: ISearchPictures = <ISearchPictures>{};

  constructor(
    private _cookieService: CookieService,
    private router: Router,
    private fb: FacebookLoginComponent,
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
  }

  searchAction() {
    this.router.navigate(['/search', this.search]);
  }

  showMenu() {
    return (this._cookieService.get("token"));
  }

  logoutAction() {
    this.fb.onFacebookLogoutClick();
    this._cookieService.removeAll();
    this.router.navigate(["/login"]);
  }

}
