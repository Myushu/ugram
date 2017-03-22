import { Injectable } from '@angular/core';
import { environment }  from "./environment";

@Injectable()
export class ConfigService {
  public baseUrl: string;
  public baseSocketIoUrl: string;
  public FBApiId: string;

  constructor() {
    if (environment['envName'] === 'prod') {
      this.baseUrl = "http://default-environment.u3jmahpz8n.us-east-1.elasticbeanstalk.com";
      this.baseSocketIoUrl = "";
      this.FBApiId = "280735385694809";
    }
    else {
      this.baseUrl = "http://10.248.229.159:3000";
      this.baseSocketIoUrl = "ws://10.248.229.159:3000/";
      this.FBApiId = "755385831298927";
    }
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
