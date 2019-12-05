import { PasswordValidators } from './password.validators';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['',
        Validators.required,
        Validators.minLength(6),
        UsernameValidators.cannotContainSpace
      ],

      password: ['',
        Validators.required,
        Validators.minLength(6)
      ],

      confirmPassword: ['',Validators.required,PasswordValidators.passwordShouldMatch]
      
    });
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  
  }
  
}
