import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public baseUrl: string = "http://10.248.229.159:3000";

  constructor() { }

  getUrl() {
    return this.baseUrl;
  }

}
