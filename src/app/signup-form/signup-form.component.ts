import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  login() {
    this.form.setErrors({ invalidLogin: true });
  }
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.connotContainSpace,
        ],
        [UsernameValidators.shouldBeUnique]
      ),
      password: new FormControl('', Validators.required),
    }),
  });
  get username() {
    return this.form.get('account.username');
  }
}
