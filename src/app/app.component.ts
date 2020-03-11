import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ToDoService } from '../app/service/todo.service';
import { clsToDolst } from './Model/ToDolist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {
  title = 'todo-app';
  todoArray=[];
  _todo: clsToDolst;

  @ViewChild('todo',{static: false}) nameInputRef: ElementRef;

  constructor( ) {  
    
   }

  ngOnInit() {
    this.getToDoTasks();
  }

  getToDoTasks() {
    // this.todoservice.getToDoList()
    //   .subscribe(
    //     todo => {
    //       this._todo = new clsToDolst(todo);
    //       this._todo.ToDoItems.forEach(val => {
    //         if (val.Name){
    //           this.todoArray.push(val);
    //         }
    //       });
    //     } 
    //   );
  }

  addTodo(value){    
    this.todoArray.push(value);
  }
  deleteItem($event){   
    for(let i=0 ;i<= this.todoArray.length ;i++)
    {
      if(this.nameInputRef.nativeElement.value== this.todoArray[i])
        {
          this.todoArray.splice(i,1) 
        }  
    } 
  }
  todoSubmit(value?:any){ console.log(value)  }
}

