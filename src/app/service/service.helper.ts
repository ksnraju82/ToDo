import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { clsReturnStatus } from '../Model/query.parameters';

@Injectable()
export class ServiceHandler {

  constructor( ) { }

  private router: Router;

  public Assign(messDetail: string | any) {

    const headers = new Headers();

    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('X-Frame-Options', 'Deny');
    headers.set('X-XSS-Protection', '1');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Authorization', sessionStorage.getItem('Authorization'));
    headers.set('MessageDetails', messDetail);

    return headers;
  }

  public parseData(res: Response) {

    const body = res.json();
    //sessionStorage.setItem('UserTime', DateTimeService.getNowISOString());
    if (body instanceof Array) {
      return body || [];
    } else {
      return body || {};
    }
  }
  public parseDataNoUpdateSessionTime(res: Response) {

    const body = res.json();
    if (body instanceof Array) {
      return body || [];
    } else {
      return body || {};
    }
  }

  public handleError(error: Response) {
    const errMsg = new clsReturnStatus(error);
    if (errMsg.status === 403) {
      sessionStorage.removeItem('Session');
      sessionStorage.removeItem('charmAbout');
      sessionStorage.removeItem('charmUser');
      this.router.navigate(['/login']);
    } else {
      errMsg._body = JSON.parse(errMsg._body);
      return Observable.throw(errMsg);
    }
  }

}
