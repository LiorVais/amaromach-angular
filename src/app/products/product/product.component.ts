import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../core/services/cart.service';
import {Product} from '../../core/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() isInStock: boolean;

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
  }
}
