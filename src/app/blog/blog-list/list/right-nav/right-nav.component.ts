import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../../../shared/services/communication/communication.service';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit {

  @Input() list;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  changeTopic(id) {
    // this.communicationService.topicChanged(id);
  }

}
