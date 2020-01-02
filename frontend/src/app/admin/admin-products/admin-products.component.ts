import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/_models';
import { ApiService } from 'src/app/shared';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: products[];

    constructor(private productsServices: ApiService) {}
  
  ngOnInit() {
    this.productsServices.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
      console.log(this.products);
    });
  }
}
