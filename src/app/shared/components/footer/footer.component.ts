import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication/communication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
  }

}
