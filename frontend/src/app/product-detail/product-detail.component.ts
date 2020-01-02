import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, DataService } from '../shared';
import { products } from '../_models';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: products;
  id: number;
  totalproduct: number = 0;
  total: number = 0;
  productid: string;
  counter: number = 1;
  couterlist: number[];
  productlist: string[];
  productlistcard: products[] = [];
  p: products;
  quantity: number[];
  flag: boolean = false;
  setcard: boolean;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ApiService,
              private data: DataService) {
  }

  ngOnInit() {
    this.data.currentproductlistcard.subscribe(productlistcard => this.productlistcard = productlistcard);
    this.data.currentproductlist.subscribe(productlist => this.productlist = productlist);
    console.log(this.productlist);
    this.data.currentquantity.subscribe(quantity => this.quantity = quantity);
    this.productid = this.route.snapshot.url[1].path;
    this.getProduct(this.productid);
    
    if(this.quantity[this.productlist.indexOf(this.productid)] != undefined)
    {
      this.counter = this.quantity[this.productlist.indexOf(this.productid)];
    }
    console.log(this.quantity[this.productlist.indexOf(this.productid)]);
    console.log(this.counter);
    console.log(this.productid);
  }


  getProduct(id: string) {
    this.productService.getProduct(id).subscribe((data)=>{this.p = data;
      console.log(this.p);
      })
  }

  addtocard(){
    this.setcard = false;
    this.data.changsetcard(this.setcard);
    this.data.currentproductlistcard.subscribe(productlistcard => this.productlistcard = productlistcard);
    this.data.currentproductlist.subscribe(productlist => this.productlist = productlist);
    console.log(this.productlist);
    this.data.currentquantity.subscribe(quantity => this.quantity = quantity);
    this.productid = this.route.snapshot.url[1].path;
    console.log(this.productid);
    this.getProduct(this.productid);

    if (this.productlist.indexOf(this.productid) == -1) {
      if (this.productlist[0] == null) {
        this.productlist[0] = this.productid;
        this.id = 0;
      }
      else {
        this.productlist.push(this.productid);
        this.id = this.productlist.indexOf(this.productid);
      }

      if (this.productlistcard[0] == null) {
        this.productlistcard[0] = this.p;
      }
      else {
        this.productlistcard.push(this.p);
      }
      this.data.changProductlist(this.productlist);

    }
    else {
      this.id = this.productlist.indexOf(this.productid);
    }
      this.quantity[this.id] = this.counter;
      this.data.changQuantity(this.quantity);
    this.router.navigate([`/shopping-cart`]);
  }
  notifyMessage($event) {
    this.counter = this.counter + 1;
  }
  notifyMessage1($event) {
    this.counter = this.counter -1;
  }
}
