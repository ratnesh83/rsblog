import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { UtilityModule } from '../shared/modules/utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    UtilityModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
