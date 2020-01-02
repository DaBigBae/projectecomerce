import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, ApiService, DataService } from '../shared';
import { User, products } from '../_models';
@Component({
  selector: '/check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  CheckOut: FormGroup;
  id: string;
  user: User;
  token: string;
  productid: string;
  counter: number = 0;
  couterlist: number[];
  productlist: string[];
  productlistcard: products[] = [];
  product: products;
  quantity: number[];
  Total: number = 0;
  totalproduct: number = 0;
  price: number;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private data: DataService) { }
  ngOnInit(){
    //this.id = this.route.snapshot.params.iduser;
    this.data.currenttoken.subscribe(token=> this.token = token);
    this.data.currentuser.subscribe(user=> this.user = user);
    //this.data.currentproductlist.subscribe(productlist => this.productlist = productlist);
    this.data.currentquantity.subscribe(quantity =>this.quantity = quantity);
    this.data.currentproductlistcard.subscribe(productlistcard => this.productlistcard = productlistcard);
  
    this.CheckOut = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });

    for (var i = 0; i < this.quantity.length; i++){
      this.totalproduct = this.totalproduct + this.quantity[i];
      this.Total = (this.productlistcard[i].price *  this.quantity[i]) + this.Total;
  }
  console.log(this.totalproduct);
  }
  get f() { return this.CheckOut.controls; }
}