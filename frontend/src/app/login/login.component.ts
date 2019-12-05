import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit(){
    console.warn(this.form.value);
  }
  
}
