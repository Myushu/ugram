import { Resource }      from "ng2-resource-rest";
import { CookieService } from "angular2-cookie/core";

export class RestClient extends Resource {
  private _cookieService: CookieService;

  getHeaders(methodOptions?: any): any {
    let headers = super.getHeaders();
    // console.log("token!", this._cookieService.get("token"));
    if (!methodOptions.noAuth) {
        headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsam9zaGFAZ21haWwuY29tIiwidXNlcklkIjoyLCJpYXQiOjE0ODk0NDg0MDEsImV4cCI6MTQ4OTUzNDgwMX0.iwrDAT-SyD8fNgvugtlDuo2qHaobyV8BRXW-zMWD7ss"
    }
    return headers;
  }

  getUrl(methodOptions?: any): string | Promise<string> {
    let resPath = super.getUrl();
    return "http://10.244.147.83:3000" + resPath;
  }
}
