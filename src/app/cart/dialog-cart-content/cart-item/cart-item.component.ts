import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from "../../models/cart-item";
import {ProductsState, selectProductById} from '../../../products/reducers/products.reducer';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Product} from "../../../products/models/product";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() onRemove = new EventEmitter();
  @Output() onAmountUpdate = new EventEmitter();

  public selectOptions$: Observable<number[]>;
  public product$: Observable<Product>;

  constructor(private productsStore: Store<ProductsState>) {
  }

  ngOnInit(): void {
    this.product$ = this.productsStore.select(selectProductById, {id: this.cartItem.productId});
    this.selectOptions$ = this.product$.pipe(map(product => Array(product.stock).fill(0).map((x, i: number) => i + 1)));
  }

  updateAmount(amount: number | string): void {
    this.onAmountUpdate.emit(Number(amount));
  }
}
