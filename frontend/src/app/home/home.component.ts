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
  product$: products[];
  products: products[];
  products1: products[];
  constructor(
    private productsServices: ApiService) { }
  ngOnInit() {
    this.productsServices.getProducts().subscribe((data) => {
      this.product$ = data;
      this.products = data;
      this.products1 = data;
      console.log(this.product$.length);
      if(this.product$.length > 10)
      { var j = 0;
        for(var i = this.product$.length-1; i >= this.product$.length -10; i--){

          this.products[j] = this.product$[i];
          j++;
          console.log(j);
        }
        this.products.splice(9,this.product$.length - 10);
      };

      var k = 0;
      for(var i = 0; i< this.product$.length; i++)
      {
        if(this.product$[i].qty >= 5){
          this.products1[k] = this.product$[i];
          k++;
        }
      };
      this.products1.splice(k-1, this.product$.length - k);
      console.log(this.products1);
      console.log(this.products);
    });
  }
}