import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ToDoService } from '../../app/service/todo.service';
import { clsToDolst } from '../Model/ToDolist';

@Component({
  selector: 'app-root',
  templateUrl: './ToDo.Component.html',
  styleUrls: ['./ToDo.Component.css'],
  providers: [ToDoService]
})

export class ToDoComponent implements OnInit {
  title = 'todo-app';
  todoArray=[];
  _todo: clsToDolst;

  @ViewChild('todo',{static: false}) nameInputRef: ElementRef;

  constructor( private todoservice: ToDoService) {  
    
   }

  ngOnInit() {
    this.getToDoTasks();
  }

  getToDoTasks() {
    this.todoservice.getToDoList()
      .subscribe(
        todo => {
          this._todo = new clsToDolst(todo);
          this._todo.ToDoItems.forEach(val => {
            if (val.Name){
              this.todoArray.push(val);
            }
          });
        } ,
        error => {
          if (error && error.status === 403) {
            //this.router.navigate(["login"]);
          } 
        }
      );
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

