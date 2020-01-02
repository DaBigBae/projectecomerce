import { Component, OnInit } from '@angular/core';
import { DataService, AlertService, ApiService } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';
import { products } from '../_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  products: products[];
  product$ = new Array<products>();
  search: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productsServices: ApiService,
    private alertService: AlertService,
    private data: DataService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
  });
    this.data.currentsearch.subscribe(search => this.search = search);
    this.productsServices.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products[1].name.indexOf('a'));
      for (var i = 0; i < this.products.length; i++) {

        if (this.products[i].name.indexOf(this.search) > -1) {
        
            this.product$.push(this.products[i]);
        }
      }
      console.log(this.product$);
    });

  }
  get f() { return this.searchForm.controls; }
  onsearch(){
    this.search = this.f.search.value;
    console.log(this.search);
    this.data.changSearch(this.search);
    this.data.currentsearch.subscribe(search => this.search = search);
    this.productsServices.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products[1].name.indexOf('a'));
      for (var i = 0; i < this.products.length; i++) {

        if (this.products[i].name.indexOf(this.search) > -1) {
        
            this.product$.push(this.products[i]);
        }
      }
      console.log(this.product$);
    });
    this.router.navigate(['/search/'+this.search]);
  }

}
