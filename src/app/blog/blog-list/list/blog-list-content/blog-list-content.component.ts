import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-list-content',
  templateUrl: './blog-list-content.component.html',
  styleUrls: ['./blog-list-content.component.css']
})
export class BlogListContentComponent {

  private _selectedTopicId;

  get selectedTopicId(): any {
    return this._selectedTopicId;
  }

  @Input()
  set selectedTopicId(val: any) {
    this._selectedTopicId = val;
  }

  private _selectedSubTopicId;

  get selectedSubTopicId(): any {
    return this._selectedSubTopicId;
  }

  @Input()
  set selectedSubTopicId(val: any) {
    this._selectedSubTopicId = val;
  }

  blogList = [{
    title: 'Carg title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'lklk lklk lkl klkl klk lklk lk lk l kl kl k lk lk lk lk lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'lklk lklk lkl klkl klk lklk lk lk l kl kl k lk lk lk lk lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  }];

  constructor() {
  }
}
