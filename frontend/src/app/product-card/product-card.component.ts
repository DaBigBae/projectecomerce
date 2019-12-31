import { ChangeDetectionStrategy,Component, OnInit, Input, Output } from '@angular/core';
import { products } from '../_models';
import {DataService} from '../shared';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  constructor(private data: DataService,
    private route: ActivatedRoute) { }
  @Input() _id: string;
  @Input() name: string;
  @Input() price: number;
  @Input() imgurl: string;
  product: products;
  ngOnInit() {
    console.log(this.name)
    this.product._id = this._id;
    this.product.name = this.name;
    this.product.price = this. price;
    this.product.imgurl = this.imgurl;
    this.data.changProduct(this.product);
    this.data.changProductlist(this.product);
  }
}
