import { Resource }       from "ng2-resource-rest";
import { CookieService }  from "angular2-cookie/core";
import {Http, Response, Request}             from "@angular/http";
import {Injector}         from "@angular/core";

import { ConfigService } from "app/shared/config";
import {Observable, Subscriber} from "rxjs";
import { Router }                     from "@angular/router";

export class RestClient extends Resource {
  private _cookieService: CookieService;
  private cs: ConfigService;
  private router: Router;

  constructor(
    http: Http,
    injector: Injector,
  ) {
    super(http, injector);
    this.router = injector.get(Router);
    this._cookieService = new CookieService();
    this.cs = new ConfigService();
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
    return this.cs.getUrl() + resPath;
  }

  responseInterceptor(observable: Observable<any>, request?: Request): Observable<any> {
    return Observable.create((subscriber: Subscriber<any>) => {
      observable.subscribe(
        (res: Response) => {
          subscriber.next((<any>res)._body ? res.json() : null);
        },
        (error: Response) => {
          if (error.status === 401) {
            this._cookieService.removeAll();
            this.router.navigate(["/login"]);
          }
          subscriber.error(error);
        },
        () => subscriber.complete()
      );
    });
  }
}
