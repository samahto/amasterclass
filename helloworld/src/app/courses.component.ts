import {Component} from '@angular/core'
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  template: `<button class="btn btn-primary"  (click)="onKeyUp(email.value)">Save</button>
  <input #email />Enter  `
  ,
})
export class CoursesComponent {
  onKeyUp(email){
    console.log(email);
  }


}
