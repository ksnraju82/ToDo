import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/Login.Component';
import { ToDoComponent } from '../app/components/ToDo.Component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }  ,
  { path: 'ToDo', component: ToDoComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
