import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-list-content',
  templateUrl: './blog-list-content.component.html',
  styleUrls: ['./blog-list-content.component.css']
})
export class BlogListContentComponent {

  private _updateData;

  get item(): any {
    return this._updateData;
  }

  @Input()
  set updateData(val: any) {
    this._updateData = val;
  }

  constructor() {
  }
}
