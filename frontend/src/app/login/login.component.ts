import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('' ,[
      Validators.required
    ]),
    password: new FormControl('' ,[
       Validators.required
    ])
  });

  get email(){
    return this.form.get('email');
  }
  
  get password(){
    return this.form.get('password');
  }

  onSubmit(){
    console.warn(this.form.value);
  }
  
}
