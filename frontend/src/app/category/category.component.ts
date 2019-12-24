import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  collection = [];
/* i là số sản phẩm được lọc theo category */
  constructor() {
    for (let i = 1; i <= 56; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit() {
  }

}
