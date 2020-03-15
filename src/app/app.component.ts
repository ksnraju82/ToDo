import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ToDoService } from '../app/service/todo.service';
import { clsToDolst } from './Model/ToDolist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToDoService]
})

export class AppComponent implements OnInit {

  constructor( private todoservice: ToDoService) {  
    
   }

  ngOnInit() {
    
  }

 
}

