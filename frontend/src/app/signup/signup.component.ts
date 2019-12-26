import { EmailValidators } from './email.validators';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
form = new FormGroup ({
  name : new FormControl('', [
    Validators.required,
  ]),
  email : new FormControl('', [
    Validators.required,
    Validators.email,
  ]),
  password: new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ])
});

get name(){
  return this.form.get('name');
}

get email(){
  return this.form.get('email');
}

get password(){
  return this.form.get('password');
}
  
}
