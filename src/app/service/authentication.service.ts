import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {    
    
    constructor(
        private router: Router,
        private http: HttpClient       
    ) {}

    login(username: string, password: string) {
        
        const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});        
        return this.http.post<string>('https://localhost:44380/api/Token', JSON.stringify({ Email: username, Password: password }), {headers: headers})
        .subscribe(data => {
            //return String(data);
            // login successful if there's a jwt token in the response
            let JWT = JSON.stringify(data);
            if (JWT) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('JWT', JSON.stringify(JWT));
            }
        }) 
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('JWT');
    }
}