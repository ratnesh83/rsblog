import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogContentRoutingModule } from './blog-content-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule,
    BlogContentRoutingModule
  ],
  declarations: [ContentComponent]
})
export class BlogContentModule { }
