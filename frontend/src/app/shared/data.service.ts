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
  productid = new BehaviorSubject<string>(null);
  // pid: string;
  // productlist: string[];
  productlist= new BehaviorSubject<string[]>([]);
  currentloading = this.loading.asObservable();
  currenttoken = this.token.asObservable();
  currentuser = this.user.asObservable();
  currentproduct = this.productid.asObservable();
  currentproductlist = this.productlist.asObservable();
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
    this.productid.next(product);
  }
  changProductlist(product){
    // this.changProduct(product);
    // this.currentproduct.subscribe(pid => this.pid = pid);
    // this.productlist.push(this.pid);
    this.productlist.next(product);
  }
  
}