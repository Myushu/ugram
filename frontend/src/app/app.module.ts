import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService }    from 'angular2-cookie/services/cookies.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PictureComponent } from './components/picture/picture.component';
import { DiscoverComponent } from './components/users/discover/discover.component';
import { FeedComponent } from './components/users/feed/feed.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { UpdateComponent } from './components/users/update/update.component';
import { UploadComponent } from './components/users/upload/upload.component';

//service
import { GlobalEventManagerService }  from './services/globalEventManager/global-event-manager.service';
import { ApiService } from './services/api/api.service';
import { UsersService } from './services/users/users.service';
import { PicturesService } from './services/pictures/pictures.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PictureComponent,
    DiscoverComponent,
    FeedComponent,
    ProfileComponent,
    UpdateComponent,
    UploadComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    GlobalEventManagerService,
    ApiService,
    CookieService,
    UsersService,
    PicturesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
