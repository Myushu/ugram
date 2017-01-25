import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
//import { SignInComponent }              from './ugram/components/sign-in/sign-in.component';
//import { SignUpComponent }              from './ugram/components/sign-in/sign-up.component';

import { HomeComponent }        from 'app/ugram/components/home/home.component';
import { PictureComponent }     from 'app/ugram/components/picture/picture.component';
import { UserFeedComponent }    from 'app/ugram/components/user/user.feed.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'picture/:userid/:id', component: PictureComponent },
    { path: 'user/:userid', component: UserFeedComponent}
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
