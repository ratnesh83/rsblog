import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  @Input() list;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

  topicChanged(id) {
    this.valueChange.emit(id);
  }

}
