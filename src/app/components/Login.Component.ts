import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {AuthenticationService} from '../service/authentication.service'

@Component({   
    templateUrl: './login.component.html',
    styleUrls: ['./login.Component.css'],
      providers: [
        AuthenticationService
      ]
  })

  export class LoginComponent implements OnInit {
    
    loginForm: FormGroup;
    submitted = false;

    constructor(
      private router: Router,
        private formBuilder: FormBuilder,
        private loginService: AuthenticationService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

         // stop here if form is invalid
         if (this.loginForm.invalid) {
            return;
        }

        var result = this.loginService.login(this.f.username.value, this.f.password.value)

        if (result) {
          this.router.navigate(['/ToDo']);
        }
          
    }
  }