import { Resource }      from "ng2-resource-rest";
import { CookieService } from "angular2-cookie/core";
import {Http}            from "@angular/http";
import {Injector}      from "@angular/core";

export class RestClient extends Resource {
  private _cookieService: CookieService;

  constructor(
    http: Http,
    injector: Injector
  ) {
    super(http, injector);
    this._cookieService = new CookieService();
  }

  getHeaders(methodOptions?: any): any {
    let headers = super.getHeaders();

    if (!methodOptions.noAuth) {
        if (this._cookieService.get("token"))
          headers.Authorization = "Bearer " + this._cookieService.get("token");
    }
    return headers;
  }

  getUrl(methodOptions?: any): string | Promise<string> {
    let resPath = super.getUrl();
    return "http://10.248.229.159:3000" + resPath;
  }
}
