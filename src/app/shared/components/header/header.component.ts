import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  message: any;
  subscription: Subscription;
  config: any;

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.getHeader().subscribe((config => {
      console.log(config);
      this.config = config;
    }));
  }

  ngOnInit() {
  }

  log(id) {

  }

}
