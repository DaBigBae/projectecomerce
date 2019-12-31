import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../shared';
import { products } from '../_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  User: any = [];
  product$: products;
  selectedProduct?:products;
  constructor(
    private productsServices: ApiService){
    this.productsServices.getProducts().subscribe((data)=>{this.product$ = data;
    console.log(this.product$);
    })
  }
  
  ngOnInit() {
  }
  

  setSelectProduct(product:products) {
    this.selectedProduct = product;
  }
    
}
