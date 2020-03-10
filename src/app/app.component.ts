import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray=[];

  @ViewChild('todo',{static: false}) nameInputRef: ElementRef;

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

