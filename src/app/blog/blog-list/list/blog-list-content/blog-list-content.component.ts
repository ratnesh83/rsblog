import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-blog-list-content',
  templateUrl: './blog-list-content.component.html',
  styleUrls: ['./blog-list-content.component.css']
})
export class BlogListContentComponent implements OnInit {


  private _selectedTopicId;

  get selectedTopicId(): any {
    return this._selectedTopicId;
  }

  @Input()
  set selectedTopicId(val: any) {
    this._selectedTopicId = val;
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }

  private _selectedSubTopicId;

  get selectedSubTopicId(): any {
    return this._selectedSubTopicId;
  }

  @Input()
  set selectedSubTopicId(val: any) {
    this._selectedSubTopicId = val;
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);
  }

  blogList = [{
    title: 'Carg title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'kj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: ' lk lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'k lk lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: ' lk lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: ' lk lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'lk lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'k lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: ' lFDE lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  },
  {
    title: 'Lage title',
    likes: 49,
    dislikes: 75,
    profileImage: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    thumbnail: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'k lk lk lkj kjk jk jk jk j kj k jk j k jk j kj k jk jk j kj kj kj k'
  }];

  constructor(private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }
}
