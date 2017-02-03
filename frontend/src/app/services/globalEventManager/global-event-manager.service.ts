import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GlobalEventManagerService {
  private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

  constructor() { }

  showNavBar(ifShow: boolean) {
    console.log('show', ifShow);
    this._showNavBar.next(ifShow);
  }
}
