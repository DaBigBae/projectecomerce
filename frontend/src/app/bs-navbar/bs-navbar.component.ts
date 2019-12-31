import { Component, OnInit, Input } from '@angular/core';
import {DataService, AlertService,ApiService} from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  loading :boolean;
  token: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: ApiService,
    private alertService: AlertService,
    private data: DataService) {}
  ngOnInit(){
    this.data.currentloading.subscribe(loading=> this.loading = loading);
    this.data.currenttoken.subscribe(token => this.token = token);
  }
  logout(){
    console.log(this.token);
    this.authenticationService.logout(this.token);
    {
          this.alertService.success('Logout successful', true);
          this.router.navigate(['/login']);
          this.data.changeMessage(false);  
          this.data.changeToken("");
          console.log("logout rồi nè");
        error => {
            this.alertService.error(error);
            //this.loading = false;
            //this.data.changeMessage(false);
        };
      }
  }
    
}
