import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication/communication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  message: any;
  subscription: Subscription;
  config = {
    profile: true,
    blogs: true,
    createBlog: true,
  };

  constructor(private communicationService: CommunicationService, private router: Router) {
    this.subscription = this.communicationService.getHeader().subscribe((config => {
      this.config = config;
    }));
  }

  ngOnInit() {
  }

  navigate() {
  }

  log(id) {

  }

}
