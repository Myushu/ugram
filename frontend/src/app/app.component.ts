import { Component } from "@angular/core";
import {SocketIoService} from "./shared/SocketIoService";
import {CookieService}    from "angular2-cookie/core";
import { environment }  from "./shared/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [SocketIoService]
})
export class AppComponent {
  constructor(
    private _cookieService: CookieService,
    private socketIoService: SocketIoService
  ) {
    console.log("======= Ugram Project Team 06 =======");
    console.log("Env :", environment['envName']);
    if (this._cookieService.get('token'))
      this.socketIoService.connectWS();
  }
}
