import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, //default route
    {path: 'dashboard',component:DashboardComponent},
    { path: 'login', component: LoginComponent },
    {path : 'signup', component:SignupComponent}
];
