import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  //styles:['p { color:red; }']
})
export class AppComponent {
  title:string = 'my-third-oroject';
  content:any=""
  getTitle(data:Event){
   console.log(data); 
    this.content=data
  }
  onClick(){
    window.alert(this.content)
  }
}
