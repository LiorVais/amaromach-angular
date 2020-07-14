import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItem} from "../../modals/cart-item";

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

  updateAmount(amount: number | string): void {
    this.cartService.updateAmount(this.cartItem.product, Number(amount));
  }
}
