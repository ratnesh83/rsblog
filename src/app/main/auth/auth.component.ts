import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AuthComponent implements OnInit {

  index;
  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe((res) => {
      console.log(res);
      if (res.tab) {
        this.index = res.tab;
      } else {
        this.index = 0;
      }
    });
  }

  goToSignUpTab() {
    this.index = 1;
  }

  goToSignInTab() {
    this.index = 0;
  }
}
