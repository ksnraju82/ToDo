import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {  Observable  } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    //constructor(private _http: HTTPService) { }
    constructor(
        private http: Http,
        // private store: Store<fromSession.State>
    ) {}

    login() {
        
        //let response = this._http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        //let user = response.toArray;
        //if (user && user.name == 'token') {
        //    // store user details and jwt token in local storage to keep user logged in between page refreshes
        //    sessionStorage.setItem('currentUser', JSON.stringify(user));
        //}
        
        return this.http.post('https://localhost:44380/api/Token', JSON.stringify({ username: "test@test.com", password: "test@123" }))
            .pipe(map((response: any) =>  {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(user));

                    // this.store.dispatch(new Session.StoreSession(JSON.stringify(user)));
                    // console.log('Action dispatched for session store: ' + JSON.stringify(user))
                }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
    }
}