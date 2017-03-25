import { Component } from "@angular/core";
import {SocketIoService} from "./shared/SocketIoService";
import {CookieService}    from "angular2-cookie/core";
import { environment }  from "./shared/environment";
import {
  Router,
  Event as RouterEvent,
  NavigationEnd,
} from '@angular/router';

declare let ga: Function;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public loading: boolean = true;

  constructor(
    private _cookieService: CookieService,
    private socketIoService: SocketIoService,
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
    console.log("======= Ugram Project Team 06 =======");
    console.log("Env :", environment['envName']);
  }

  showChat() {
    return (this._cookieService.get("token"));
  }
}
