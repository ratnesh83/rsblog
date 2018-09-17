import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class UtilityModule { }
