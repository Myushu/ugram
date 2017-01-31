import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule}        from '@angular/http';
import { CookieService }    from 'angular2-cookie/services/cookies.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';

//Routing
import { AppRoutingModule } from './app-routing.module';

import { TagInputModule }   from 'ng2-tag-input';


//Components
import { AppComponent }         from './app.component';
import { NavBarComponent }      from './ugram/components/nav/navbar.component';
import { HomeComponent }        from 'app/ugram/components/home/home.component';
import { PictureComponent }     from 'app/ugram/components/picture/picture.component';
import { UserFeedComponent }    from 'app/ugram/components/user/user.feed.component';
import {LoginComponent}         from "app/ugram/components/login/login.component";
import {UserProfileComponent}   from 'app/ugram/components/user/user.profile.component';
import {UserUploadComponent}    from 'app/ugram/components/user/user.upload.component';
import { UserUpdateComponent }  from 'app/ugram/components/user/user.update.component';


//Services
import { CoreApiService}        from './ugram/services/api/core.api.service';
import { GlobalEventsManager }  from './ugram/services/globalEventManager/global.event.manager.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,
      NgbModule.forRoot(),
      TagInputModule
  ],
  declarations: [
      AppComponent,
      NavBarComponent,
      HomeComponent,
      PictureComponent,
      UserFeedComponent,
      LoginComponent,
      UserProfileComponent,
      UserUploadComponent,
      UserUpdateComponent,
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
