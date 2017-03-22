import { Injectable } from '@angular/core';
import {CookieService}                                from "angular2-cookie/core";
import {ConfigService}                                from "app/shared/config";
import * as io from "socket.io-client";

@Injectable()
export class SocketIoService {
  public socket: SocketIOClient.Socket;

  constructor(
    private _cookieService: CookieService,
    private configService: ConfigService
  ) {
  }

  connectWS() {
    console.log('bonjour');
    this.socket = io.connect(this.configService.getSocketIoUrl());
    this.socket.emit('join', this._cookieService.get('token'));


    this.socket.on('notification', function(data) {
      console.log('data', data);
    });
  }
}
