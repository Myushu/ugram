import { Component, OnInit }          from "@angular/core";
import {CookieService}                from "angular2-cookie/core";
import { Router }                     from "@angular/router";

@Component({
  selector: "navbar",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  providers: [CookieService]
})
export class NavComponent implements OnInit {
  showNavBar: boolean = false;

  constructor(
    private _cookieService: CookieService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  showMenu() {
    return (this._cookieService.get("token"));
  }

  logoutAction() {
    this._cookieService.removeAll();
    this.router.navigate(["/login"]);
  }

}
