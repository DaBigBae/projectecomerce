import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  collection = [];
  /* i là số sản phẩm được lọc theo category */
    constructor() {
      for (let i = 1; i <= 56; i++) {
        this.collection.push(`item ${i}`);
      }
    }

  filter(query: string) {
    console.log(query);
  }
  
  ngOnInit() {
  }

}
