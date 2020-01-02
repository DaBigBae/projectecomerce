import { Component, OnInit, Input } from '@angular/core';
import { DataService, AlertService, ApiService } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  searchForm: FormGroup;
  loading: boolean;
  token: string;
  user: User;
  setcard: boolean = true;
  search: string;
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: ApiService,
    private alertService: AlertService,
    private data: DataService) { }
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
  });
  this.search = this.f.search.value;
    this.data.currentloading.subscribe(loading => this.loading = loading);
    this.data.currenttoken.subscribe(token => this.token = token);
    this.data.currentuser.subscribe(user => this.user = user);
    
  }
  logout() {
    this.authenticationService.logout(this.token).subscribe(res => {
      this.alertService.success('Logout successful', true);
      this.router.navigate(['/']);
      this.data.changeMessage(false);
      this.data.changeToken("");
      console.log("logout rồi nè");
    },
      error => {
        this.alertService.error(error);
      });
  }

  onsetcard(){
    this.setcard = false;
    this.data.changsetcard(this.setcard);
  }
  get f() { return this.searchForm.controls; }

  onsearch(){
    this.search = this.f.search.value;
    console.log(this.search);
    this.data.changSearch(this.search);
    this.router.navigate(['/search/'+this.search]);
  }
}
