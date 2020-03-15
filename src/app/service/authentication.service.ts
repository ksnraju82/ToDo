import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import { map, catchError } from "rxjs/operators";


@Injectable()
export class AuthenticationService {
    //constructor(private _http: HTTPService) { }
    constructor(
        private http: HttpClient       
    ) {}

    login(username: string, password: string) {
        
        
        return this.http.post('https://localhost:44380/api/Token', JSON.stringify({ username: username, password: password }))
            .pipe(map((response: any) =>  {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(user));                    
                }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
    }
}