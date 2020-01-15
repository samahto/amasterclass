import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }
  contactMethod=[
    {id:1 ,name:"Email 1"},
    {id:2 ,name:"Email 2"}
  ]

  ngOnInit() {
  }
  log(x){
    console.log(x);
  }
  submit(f){
    console.log(f)
  }

}
