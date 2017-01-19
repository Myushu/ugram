import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule}    from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routing
import { AppRoutingModule }    from './app-routing.module';


//Components
import { AppComponent }         from './app.component'

//Services
import { CoreApiService}        from './uram/services/api/core.api.service';
import { GlobalEventsManager }  from './uram/services/globalEventManager/global.event.manager.service';



@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,
      NgbModule.forRoot()
  ],
  declarations: [
      AppComponent,
      //DashboardComponent,
  ],
  providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
      CoreApiService,
      CookieService,
      GlobalEventsManager
  ],
  bootstrap:    [
      AppComponent

  ]
})
export class AppModule {
}
