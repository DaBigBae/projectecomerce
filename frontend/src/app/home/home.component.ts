import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../shared';
import { products } from '../_models';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

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
     this.getUser()
  }
  

  setSelectProduct(product:products) {
    this.selectedProduct = product;
  }
  getUser(){
    return this.productsServices.getUser().subscribe((data)=>{
      this.User = data;
      console.log(this.User);
      console.log(this.User[0]._id);
    })
  }
    
}
