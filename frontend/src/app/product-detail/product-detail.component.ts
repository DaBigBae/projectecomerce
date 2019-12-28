import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared';
import { products } from '../_models';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  public product: products;
  public id: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ApiService) {
  }

  ngOnInit() {
    
     this.id = this.route.snapshot.url[1].path;
      this.getProduct(this.id);
    console.log(this.id);
    console.log(this.product);
  }

  getProduct(id: string) {
    this.productService.getProduct(id).subscribe((data)=>{this.product = data;
      console.log(this.product);
      })
  }

}
