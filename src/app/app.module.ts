import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoService } from '../app/service/todo.service';
import { ServiceHandler } from '../app/service/service.helper';
import {HTTPService} from '../app/service/http.service';
import {AuthenticationService} from '../app/service/authentication.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule    
  ],
  providers: [HTTPService, ServiceHandler, ToDoService, AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
