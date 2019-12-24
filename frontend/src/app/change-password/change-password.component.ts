import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form = new FormGroup({
    curpass: new FormControl('' ,[
      Validators.required
    ]),
    conpass: new FormControl('' ,[
      Validators.required
    ]),
    newpass: new FormControl('' ,[
       Validators.required
    ])
  });

  get curpass(){
    return this.form.get('curpass');
  }

  get newpass(){
    return this.form.get('newpass');
  }
  
  get conpass(){
    return this.form.get('conpass');
  }

  onSubmit(){
    console.warn(this.form.value);
  }
}
