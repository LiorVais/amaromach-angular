import {Component, Input, OnInit} from '@angular/core';
import {CartItem, CartService} from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  public selectOptions: number[];

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
    this.selectOptions = Array(this.cartItem.product.stock).fill(0).map((x, i: number) => i + 1);
  }

  updateAmount(amount: number): void {
    this.cartItem.amount = Number(amount);
  }
}
