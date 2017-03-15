import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent }        from "./components/home/home.component";
import { LoginComponent }       from "./components/login/login.component";
/*import { PictureComponent }     from "./components/picture/picture.component";
import { FeedComponent }        from "./components/users/feed/feed.component";
import { UpdateComponent }      from "./components/users/update/update.component";
import { ProfileComponent }     from "./components/users/profile/profile.component";
import { UploadComponent }      from "./components/users/upload/upload.component";
import { DiscoverComponent }    from "./components/users/discover/discover.component";*/

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  /*{ path: "picture/:userid/:id", component: PictureComponent },
  { path: "user/:userid", component: FeedComponent},
  { path: "update", component: UpdateComponent},

  { path: "profile", component: ProfileComponent },
  { path: "upload", component: UploadComponent},
  { path: "discover", component: DiscoverComponent }*/
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
