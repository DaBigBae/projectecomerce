import { Component, OnInit } from '@angular/core';
declare function openNav():any;
declare function closeNav():any;


@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    openNav();
    closeNav();
  }

}
