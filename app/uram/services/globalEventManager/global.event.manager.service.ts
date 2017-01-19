import { EventEmitter, Injectable }     from "@angular/core";

@Injectable()
export class GlobalEventsManager {
    public showNavBar: EventEmitter<boolean> = new EventEmitter();


    constructor() {

    }
}