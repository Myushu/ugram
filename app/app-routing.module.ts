import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
//import { SignInComponent }              from './uram/components/sign-in/sign-in.component';
//import { SignUpComponent }              from './uram/components/sign-in/sign-up.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //{ path: 'dashboard', component: DashboardComponent},
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
