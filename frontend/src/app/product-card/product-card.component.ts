import { ChangeDetectionStrategy,Component, OnInit, Input } from '@angular/core';
import { products } from '../_models';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  constructor() { }
  @Input() _id: string;
  @Input() name: string;
  @Input() price: number;
  @Input() imgurl: string;
  
  ngOnInit() {
  }

}
