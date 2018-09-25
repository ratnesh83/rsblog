import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/1',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'auth/:tab',
    component: AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
