import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { ServiceHandler } from '../service/service.helper'

import { clsToDolst } from '../Model/ToDolist';

import { clsGETMessageDetails, clsQueryParameter } from '../Model/query.parameters';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ToDoService {

  schedulerUrl: string = "https://localhost:44380/api/Scheduler";

  constructor(private http: Http, private servicehandler: ServiceHandler) {}

  getToDoList() : Observable<clsToDolst> {   
     

      let objMsgDetails = new clsGETMessageDetails();


      let options = new RequestOptions();
      let messDetail = JSON.stringify(objMsgDetails);
      options.headers = this.servicehandler.Assign(messDetail);

    return this.http.get(this.schedulerUrl, options)
          .map(this.servicehandler.parseData)
        .catch(this.servicehandler.handleError);

  }

}

  