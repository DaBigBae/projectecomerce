import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, DataService } from '../shared';
import { products } from '../_models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  productid: string;
  productlist: string[];
  products: products[];
  product: products;
  p: products;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ApiService,
    private data: DataService) { }

  ngOnInit() {
    this.data.currentproductlist.subscribe(productlist => this.productlist = productlist);
    this.data.currentproduct.subscribe(productid => this.productid = productid);
    console.log(this.productid);
    if (this.productlist[0] == null) {
      this.productlist[0] = this.productid;
    }
    else {
      this.productlist.push(this.productid);
    }

    this.data.changProductlist(this.productlist);
    this.data.currentproductlist.subscribe(productlist => this.productlist = productlist);
    console.log(this.productlist);

    for (var i = 0; i < this.productlist.length; i++) {
      this.getProduct(this.productlist[i]);
        this.products.push(this.product);
      console.log(this.products[i]);
    }
    console.log(this.products);
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe(data => {
     this.product = data;
      console.log(this.product);
    })
  }


}
