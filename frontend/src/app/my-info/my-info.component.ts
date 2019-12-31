import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DataService} from '../shared';
import {User} from '../_models'

@Component({
  selector: 'my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
  user: User;
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
 constructor(private data: DataService) {}
  ngOnInit(){
    this.data.currentuser.subscribe(user=> this.user = user);
    console.log(this.user);
  }
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
