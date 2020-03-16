import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoService } from '../app/service/todo.service';
import { ServiceHandler } from '../app/service/service.helper';
import {HTTPService} from '../app/service/http.service';
import {AuthenticationService} from '../app/service/authentication.service';
import {LoginComponent} from '../app/components/Login.Component';
import {ToDoComponent} from '../app/components/ToDo.Component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [HTTPService, ServiceHandler, ToDoService, AuthenticationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
