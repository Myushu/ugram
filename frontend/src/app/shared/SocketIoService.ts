import { Injectable } from '@angular/core';
import {CookieService}                                from "angular2-cookie/core";
import {ConfigService}                                from "app/shared/config";
import * as io from "socket.io-client";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketIoService {
  public socket: SocketIOClient.Socket;
  private _cookieService: CookieService;
  private configService: ConfigService;

  static instance: SocketIoService;
  static isCreating: Boolean = false;

  constructor() {
    this._cookieService = new CookieService();
    this.configService = new ConfigService();
    if (!SocketIoService.isCreating) {
      console.log("You can't call new in Singleton instances!");
    }
  }

  static getInstance() {
    if (SocketIoService.instance == null) {
      SocketIoService.isCreating = true;
      SocketIoService.instance = new SocketIoService();
      SocketIoService.isCreating = false;
    }
    return SocketIoService.instance;
  }

  static closeInstance() {
    SocketIoService.instance = null;
  }

  connectWS() {
    console.log('Socket IO Log In');
    this.socket = io.connect(this.configService.getSocketIoUrl());
    this.socket.emit('join', this._cookieService.get('token'));
    this.socket.on('notification', (data) => {});
    this.socket.on('message', (data) => {});
    this.socket.on('connection', (data) => {console.log('connection', data)});
    this.socket.on('disconnection', (data) => {console.log('disconnection', data)});
    this.socket.on('errors', (data) => {
      console.log('errors', data);
    });
  }

  getNotification() {
    if (!this.socket)
      this.connectWS();
    let observable = new Observable(observer => {
      this.socket.on('notification', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  getMessage() {
    if (!this.socket)
      this.connectWS();
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  sendMessage(message) {
    this.socket.emit('message', message);
  }

  closeSocket() {
    this.socket.disconnect();
  }
}
