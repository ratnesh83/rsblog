import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { UtilityModule } from '../shared/modules/utility/utility.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    UtilityModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  declarations: [MainComponent,  HomeComponent, AuthComponent, SignupComponent, SigninComponent]
})
export class MainModule { }
