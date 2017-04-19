import { Injectable } from '@angular/core';
import { environment }  from "./environment";

@Injectable()
export class ConfigService {
  public baseUrl: string;
  public baseSocketIoUrl: string;
  public FBApiId: string;

  constructor() {
      this.baseUrl = "http://10.248.203.235:3000";
      this.baseSocketIoUrl = "ws://10.248.203.235:3000";
      this.FBApiId = "280735385694809";
  }

  getUrl() {
    return this.baseUrl;
  }

  getSocketIoUrl() {
    return this.baseSocketIoUrl;
  }

  getApiIdFB() {
    return this.FBApiId;
  }

}
