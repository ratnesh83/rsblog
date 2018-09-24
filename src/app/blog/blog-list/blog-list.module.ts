import { NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListRoutingModule } from './blog-list-routing.module';
import { ListComponent } from './list/list.component';
import { RightNavComponent } from './list/right-nav/right-nav.component';
import { LeftNavComponent } from './list/left-nav/left-nav.component';
import { BlogListContentComponent } from './list/blog-list-content/blog-list-content.component';
import { CommunicationService } from '../../shared/services/communication/communication.service';
import { UtilityModule } from '../../shared/modules/utility/utility.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    BlogListRoutingModule,
    UtilityModule,
    NgZorroAntdModule,
    NgxSpinnerModule
  ],
  providers: [],
  declarations: [ListComponent, RightNavComponent, LeftNavComponent, BlogListContentComponent]
})
export class BlogListModule { }
