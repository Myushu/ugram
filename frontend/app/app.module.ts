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
import { AppComponent }         from './app.component';
import { NavBarComponent }      from './ugram/components/nav/navbar.component';
import { HomeComponent }        from 'app/ugram/components/home/home.component';
import { PictureComponent }     from 'app/ugram/components/picture/picture.component';
import { UserFeedComponent }    from 'app/ugram/components/user/user.feed.component';


//Services
import { CoreApiService}        from './ugram/services/api/core.api.service';
import { GlobalEventsManager }  from './ugram/services/globalEventManager/global.event.manager.service';



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
      NavBarComponent,
      HomeComponent,
      PictureComponent,
      UserFeedComponent,
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
