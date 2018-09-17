import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../../../../shared/services/communication/communication.service';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit {

  @Input() list;
  @Output() valueChange = new EventEmitter();

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }

  subTopicChanged(id) {
    this.valueChange.emit(id);
  }

}
