import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from "../../models/cart-item";
import {Product} from "../../../products/models/product";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Input() product: Product;
  @Output() onRemove = new EventEmitter();
  @Output() onAmountUpdate = new EventEmitter();

  public selectOptions: number[];

  constructor() {
  }

  ngOnInit(): void {
    this.selectOptions = Array(this.product.stock).fill(0).map((x, i: number) => i + 1);
  }

  updateAmount(amount: number | string): void {
    this.onAmountUpdate.emit(Number(amount));
  }
}
