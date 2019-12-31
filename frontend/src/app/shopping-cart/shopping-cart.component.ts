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
  products: products[];
  product: products;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ApiService,
    private data: DataService) { }

  ngOnInit() {
    this.data.currentproductlist.subscribe(products=> this.products = products);
    console.log(this.products);
    for(var i = 0; i< this.products.length; i++){
    this.getProduct(this.products[i]._id);
    }
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe((data) => {
    this.product = data;
      console.log(this.product);
    })
  }


}
