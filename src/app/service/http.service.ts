import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { ServiceHandler } from '../service/service.helper'
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HTTPService {
    constructor(private _http: Http, private servicehandler: ServiceHandler) { }

    get(url: string, Params?: URLSearchParams): Observable < any > {
        let headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        headers.set('X-Frame-Options', 'Deny');
        headers.set('X-XSS-Protection', '1');
        headers.set('X-Content-Type-Options', 'nosniff');
        headers.set('Authorization', 'Bearer' + this.JWT());
        let options = new RequestOptions();
        options.headers = headers;
        if(Params) {
            URLSearchParams.arguments.search = Params;
        }                    
    return this._http.get(url, options)
    .map(this.servicehandler.parseData)
    .catch(this.servicehandler.handleError);
    }

post(url: string, model: any): Observable<any> {
    let body = JSON.stringify(model);
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('X-Frame-Options', 'Deny');
    headers.set('X-XSS-Protection', '1');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Authorization', 'Bearer' + this.JWT());
    let options = new RequestOptions({ headers: headers });
    return this._http.post(url, body, options)
    .map(this.servicehandler.parseData)
    .catch(this.servicehandler.handleError);
}

put(url: string, id: number, model: any): Observable<any> {
    let body = JSON.stringify(model);
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('X-Frame-Options', 'Deny');
    headers.set('X-XSS-Protection', '1');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Authorization', 'Bearer' + this.JWT());
    let options = new RequestOptions({ headers: headers });
    return this._http.put(url+id, body, options)
    .map(this.servicehandler.parseData)
    .catch(this.servicehandler.handleError);
}

delete(url: string, id: number): Observable<any> {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('X-Frame-Options', 'Deny');
    headers.set('X-XSS-Protection', '1');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Authorization', 'Bearer' + this.JWT());
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(url+id,options)
    .map(this.servicehandler.parseData)
    .catch(this.servicehandler.handleError);
}

private handleError(error: Response) {
    
    return Observable.throw(error.json().error || 'Server error');
}

private JWT() {
    // create authorization header with JSON Web Token
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        //let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
        //return new RequestOptions({ headers: headers });
        return currentUser.token;
    }
}
}
