import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }
  /* eslint-disable @typescript-eslint/no-explicit-any */
  removetopic(topic: any) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  form;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  addtopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
