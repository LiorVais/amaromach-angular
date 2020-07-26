import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

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
}
