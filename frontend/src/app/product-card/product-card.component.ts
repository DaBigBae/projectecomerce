import { ChangeDetectionStrategy, Component, OnInit, Input, Output } from '@angular/core';
import { products } from '../_models';
import { DataService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  constructor(private data: DataService,
    private router: Router) { }
  @Input() _id: string;
  @Input() name: string;
  @Input() price: number;
  @Input() imgurl: string;
   productid: string;
  ngOnInit() {
  }
  cart(){
    this.data.changProduct(this._id);
    this.router.navigate([`/shopping-cart`]);
  }
}
