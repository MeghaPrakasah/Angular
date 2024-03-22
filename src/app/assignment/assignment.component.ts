import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  twoWay = " "

  completed = false
  constructor() {
    setTimeout(()=>{
        this.completed=true},3000)
  }

  resetUsername() {
    this.twoWay = '';
  }

  nullValue() {
    return this.twoWay=== '';
  }


}
