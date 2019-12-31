import { Injectable } from '@angular/core';
import {User, products} from '../_models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token = new BehaviorSubject<string>("");
  loading = new BehaviorSubject<boolean>(false);
  user = new BehaviorSubject<User>(null);
  product = new BehaviorSubject<products>(null);
  productlist: products[];
  productlist1= new BehaviorSubject<products[]>(null);
  currentloading = this.loading.asObservable();
  currenttoken = this.token.asObservable();
  currentuser = this.user.asObservable();
  currentproduct = this.product.asObservable();
  currentproductlist = this.productlist1.asObservable();
  // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource

  constructor() { }
 
  // method này để change source message 
  changeMessage(loading) {
    this.loading.next(loading);
  }
  changeToken(token){
    this.token.next(token);
  }
  changUser(user){
    this.user.next(user);
  }
  changProduct(product){
    this.product.next(product);
  }
  changProductlist(product){
    this.changProduct(product);
    this.productlist.push(product);
    this.productlist1.next(this.productlist);
  }
  
}