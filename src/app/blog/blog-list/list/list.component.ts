import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../shared/services/communication/communication.service';

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
  list = [{ topicName: 'Technology', id: 1, subTopics: [{ name: 'Java', id: 11 }, { name: 'Node.js', id: 12 }, { name: 'Angular', id: 13 }, { name: 'Others', id: 12 }] }, { topicName: 'Sports', id: 2, subTopics: [{ name: 'Cricket', id: 21 }, { name: 'FootBall', id: 22 }, { name: 'Others', id: 23 }] }];

  constructor(private communicationService: CommunicationService) {
  }

  ngOnInit() {
    this.communicationService.sendHeader({
        profile: true,
        blogs: false,
        createBlog: true
    });
  }

  isMobile() {
    if (window.innerWidth <= 800) {
      return true;
    } else {
      return false;
    }
  }

  updateSubList(id: number) {
    console.log(id);
    this.selectedTopicId = id;
    const index = this.list.findIndex((element) => element.id === id);
    console.log(index);
    this.subList = this.list[index].subTopics;
  }

  updateData(id) {
    console.log('2');
    this.selectedSubTopicId = id;
  }
}
