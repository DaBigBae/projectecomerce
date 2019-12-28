import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  User: any = [];
  constructor(
    public api: ApiService
  ) {}
  
  ngOnInit() {
     this.getUser()
  }

  getUser(){
    return this.api.getUser().subscribe((data)=>{
      this.User = data;
      console.log(this.User);
      console.log(this.User[0]._id);
    })
  }
}
