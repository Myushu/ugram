import { BrowserModule }          from "@angular/platform-browser";
import { NgModule }               from "@angular/core";
import { FormsModule }            from "@angular/forms";
import { HttpModule }             from "@angular/http";
import { CookieService }          from "angular2-cookie/services/cookies.service";
import { NgbModule }              from "@ng-bootstrap/ng-bootstrap";
import { TagInputModule }         from "ng2-tag-input";
import {ResourceModule}           from "ng2-resource-rest";

import { AppRoutingModule }       from "./app-routing.module";
import { AppComponent }           from "./app.component";
import { NavComponent }           from "./components/nav/nav.component";
import { HomeComponent }          from "./components/home/home.component";
import { LoginComponent }         from "./components/login/login.component";
import { FacebookLoginComponent } from "./components/facebook-login/facebook-login.component"
import { PictureComponent }       from "./components/picture/picture.component";
import { DiscoverComponent }      from "./components/users/discover/discover.component";
import { FeedComponent }          from "./components/users/feed/feed.component";
import { ProfileComponent }       from "./components/users/profile/profile.component";
import { UpdateComponent }        from "./components/users/update/update.component";
import { UploadComponent }        from "./components/users/upload/upload.component";
import { RegisterComponent }      from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    FacebookLoginComponent,
    PictureComponent,
    DiscoverComponent,
    FeedComponent,
    ProfileComponent,
    UpdateComponent,
    UploadComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ResourceModule.forRoot(),
    TagInputModule
  ],
  providers: [
    CookieService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
