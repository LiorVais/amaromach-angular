import {Component, Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {CartService} from '../../../cart/services/cart.service';
import {Product} from '../../modals/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  @Input() product: Product;
  @Input() isInStock: boolean;
  @Input() isInCart: boolean;
  @Output() onAdd = new EventEmitter();
  @Output() onRemove = new EventEmitter();

  constructor(public cartService: CartService) {
  }

}
