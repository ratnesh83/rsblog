import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CommunicationService {
  constructor() { }

  private subjectHeader = new Subject<any>();


  sendHeader(config) {
    this.subjectHeader.next(config);
  }

  clearHeader() {
    this.subjectHeader.next();
  }

  getHeader(): Observable<any> {
    return this.subjectHeader.asObservable();
  }

}
