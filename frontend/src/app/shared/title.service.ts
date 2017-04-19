import { Injectable } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Injectable()
export class TitleService {
  public nbrTotalMessage: number = 0;

  constructor(
    private titleService: Title
  ) { }

  setTitleNotif(nbrNotif) {
    this.nbrTotalMessage += nbrNotif;
    this.titleService.setTitle("(" + this.nbrTotalMessage + ") Ugram");
  }

  deleteTitleNotif() {
    this.nbrTotalMessage = 0;
    this.titleService.setTitle("Ugram");
  }
}
