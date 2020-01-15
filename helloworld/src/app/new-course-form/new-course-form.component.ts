import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  constructor() { }
  form = new FormGroup({
    topics: new FormArray([])
  });
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    // set to empty string to remove an element from an array
    topic.value = '';
  }
  removeTopic(topic: FormControl) {
    const result = this.topics.controls.indexOf(topic);
    this.topics.removeAt(result);
  }
  // here we have used as to declare type of form array
   get topics() {
     return this.form.get('topics') as FormArray;
   }

  ngOnInit() {
  }

}
