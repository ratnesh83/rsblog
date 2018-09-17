import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  selectedSubTopicId = 0;
  selectedTopicId = 0;
  subList = [];
  // tslint:disable-next-line:max-line-length
  list = [{ topicName: 'tech', id: 1, subTopics: [{ name: 'cs', id: 11 }, { name: 'node', id: 12 }, { name: 'kk', id: 13 }] }, { topicName: 'cook', id: 2, subTopics: [{ name: 'food', id: 21 }, { name: 'chilli', id: 22 }, { name: 'kkklkl', id: 23 }] }];

  constructor() { }

  ngOnInit() {
  }

  updateSubList(id: number) {
    console.log(id);
    this.selectedTopicId = id;
    const index = this.list.findIndex((element) => element.id === id );
    console.log(index);
    this.subList = this.list[index].subTopics;
  }

  updateData(id) {
    this.selectedSubTopicId = id;
  }
}
