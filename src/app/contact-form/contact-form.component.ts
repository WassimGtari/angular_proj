import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactmethods = [
    {
      id: 1,
      name: 'Email',
    },
    {
      id: 2,
      name: 'SMS',
    },
  ];
  log(x) {
    console.log(x);
  }
  onsubmit(f) {
    console.log(f);
  }
}
