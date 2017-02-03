import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
//import { SignInComponent }              from './ugram/components/sign-in/sign-in.component';
//import { SignUpComponent }              from './ugram/components/sign-in/sign-up.component';

import { HomeComponent }        from 'app/ugram/components/home/home.component';
import { PictureComponent }     from 'app/ugram/components/picture/picture.component';
import { UserFeedComponent }    from 'app/ugram/components/user/user.feed.component';
import { UserUpdateComponent }           from 'app/ugram/components/user/user.update.component';
import {LoginComponent}         from 'app/ugram/components/login/login.component';
import {UserProfileComponent}   from 'app/ugram/components/user/user.profile.component';
import {UserUploadComponent}    from 'app/ugram/components/user/user.upload.component';
import {UserDiscoverComponent} from 'app/ugram/components/user/user.discover.component';
import {UserListComponent} from  'app/ugram/components/user/user.list.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'picture/:userid/:id', component: PictureComponent },
    { path: 'user/:userid', component: UserFeedComponent},
    { path: 'update', component: UserUpdateComponent},
    { path: 'user/:userid', component: UserFeedComponent},
    { path: 'users', component: UserListComponent},
    { path: 'login', component: LoginComponent},
    { path: 'profile', component: UserProfileComponent },
    { path: 'upload', component: UserUploadComponent},
    { path: 'discover', component: UserDiscoverComponent }
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
