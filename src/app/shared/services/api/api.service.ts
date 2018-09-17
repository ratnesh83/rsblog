import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError, } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';



@Injectable()
export class ApiService {
  apiBaseUrl: string;
  constructor(private client: HttpClient,
    private router: Router) {
    this.apiBaseUrl = environment.apiUrl;
  }


  private appendHeaders(headers: HttpHeaders, customHeaders?) {
    let token = localStorage.getItem('Authorization');
    token = token ? token : '';
    let contentType = 'application/json';
    if (customHeaders && customHeaders.hasOwnProperty('content-type')) {
      contentType = customHeaders['content-type'];
    } else if (customHeaders && customHeaders.hasOwnProperty('entity-type')) {
      headers = headers.set('entity-type', customHeaders['entity-type']);
    }
    if (contentType) { headers = headers.set('Authorization', token).set('Content-Type', contentType); } else {
      headers = headers.set('Authorization', token);
    }
    return headers;
  }
  get(url, context?, params?): Observable<any> {
    let headers = new HttpHeaders();
    headers = this.appendHeaders(headers);
    if (context && params) {
      headers = headers.set(context, params);
    }
    return this.client.get(this.apiBaseUrl + url, { headers: headers })
      .pipe(map(res => {
        return res;
      }), catchError(error => this.handleError(error)));
  }

  post(url, data, customHeaders?) {
    return this.client.post(this.apiBaseUrl + url, data, {
      headers: this.appendHeaders(new HttpHeaders(), customHeaders)
    }).pipe(map(res => {
      return res;
    }), catchError(error => this.handleError(error)));
  }

  put(url, data) {
    const headers = new Headers();
    return this.client.put(this.apiBaseUrl + url, data, {
      headers: this.appendHeaders(new HttpHeaders())
    }).pipe(map(res => {
      return res;
    }), catchError(error => this.handleError(error)));
  }

  delete(url) {
    const headers = new Headers();
    return this.client.delete(this.apiBaseUrl + url, {
      headers: this.appendHeaders(new HttpHeaders())
    }).pipe(map(res => {
      return res;
    }), catchError(error => this.handleError(error)));
  }

  handleError = (error) => {
    if (error.status === 401) {
      // this.router.navigate([]);
      return Observable.throw(error);
    }
    if (error.status === 403) {
      // this.router.navigate([]);
      return Observable.throw(error);
    }
    if (error.status >= 500) {
      // this.router.navigate([]);
    } else {
      return Observable.throw(error);
    }
  }

}
