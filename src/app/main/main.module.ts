import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { UtilityModule } from '../shared/modules/utility/utility.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    UtilityModule
  ],
  declarations: [MainComponent, HomeComponent, RegisterComponent]
})
export class MainModule { }
