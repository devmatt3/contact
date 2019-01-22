import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  inputClass: String = "contact-input__title";
  @ViewChild("name") inputField: ElementRef;

  contactForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    organization: new FormControl(''),
    comments: new FormControl('')
  });


  constructor() {

  }

  ngOnInit() {
  }

  inputChange(input){
    if (input != "") {
      this.inputClass = "tek-input__title-active";
    } else {
      this.inputClass = "tek-input__title";
    }
  }

  titleClick(){
    this.inputField.nativeElement.focus();
  }

  submit(){
    console.log(this.contactForm);
  }
}
