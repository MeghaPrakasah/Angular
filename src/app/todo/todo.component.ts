import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input('content') titleFromParent:string = ""
  @Output() sendTodo = new  EventEmitter<{content:string}>()
  todo1 = "understanding data binding"
  todo2 = "custom event"
  todos:string[]=[]
  completed = false
  
  customevent(){
      this.sendTodo.emit({content:this.todo2})
  }
  
  constructor() {
    setTimeout(()=>{
        this.completed=true},3000)
  }
  onCompleted() {
    window.alert("Completed");
    this.completed = true;
    this.todos.push(this.todo1)
    // this.todos.push(1)
    console.log(this.titleFromParent);
    
  }

  getColor() {
    return this.completed ? 'green' : 'red'
  }

  
}

