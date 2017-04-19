import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public baseUrl: string;
  public baseSocketIoUrl: string;
  public FBApiId: string;

  constructor() {
      this.baseUrl = "http://ugram-team6.us-east-1.elasticbeanstalk.com";
      this.baseSocketIoUrl = "ws://ugram-team6.us-east-1.elasticbeanstalk.com";
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
