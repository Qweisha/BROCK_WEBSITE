import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface Item {
  value: string;

}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  items: Item[] = [
    { value: 'General' },
    { value: 'Sales' },

  ];

  contactForm = new FormGroup({
    name: new FormControl(['', Validators.required]),
    email: new FormControl( ['', [Validators.required, Validators.email]]),
    phone: new FormControl(['', [Validators.required, Validators.minLength(10)]]),
    dep: new FormControl(['', Validators.required]),
    sub: new FormControl(),
    message: new FormControl(),

  }) 
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      dep: ['', Validators.required],
      sub: ['', Validators.required],
      message: [''],

    });

  }

  ngOnInit(): void {
  }

}
