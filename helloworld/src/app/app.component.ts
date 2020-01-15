import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ];
  onAdd(){
    this.courses.push({id:1,name:"course4"})
  }
  onRemove(course){

    let index = this.courses.indexOf(course)
    this.courses.splice(index,1);
  }
  onChange(course){
    course.name='updated'
  }

}
