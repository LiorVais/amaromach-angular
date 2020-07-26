import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import * as CartActions from "../actions/cart.actions";
import {select, Store} from "@ngrx/store";
import {selectTotalPrice, selectAllCartItems, CartItemsState} from "../reducers/cart.reducer";
import {Observable} from "rxjs";
import {CartItem} from "../models/cart-item";
import {ProductsState, selectProductById} from "../../products/reducers/products.reducer";
import {Product} from "../../products/models/product";

@Component({
  selector: 'app-dialog-cart-content',
  templateUrl: './dialog-cart-content.component.html',
  styleUrls: ['./dialog-cart-content.component.less']
})
export class DialogCartContentComponent {
  totalPrice$: Observable<number>;
  cartContent$: Observable<CartItem[]>;

  constructor(
    public dialogRef: MatDialogRef<DialogCartContentComponent>,
    private productsStore: Store<ProductsState>,
    private cartStore: Store<CartItemsState>) {
    this.totalPrice$ = cartStore.pipe(select(selectTotalPrice));
    this.cartContent$ = cartStore.pipe(select(selectAllCartItems));
  }

  updateAmount(id: string, amount: number): void {
    this.cartStore.dispatch(CartActions.updateCartItem({update: {id, changes: {amount}}}));
  }

  removeFromCart(id: string): void {
    this.cartStore.dispatch(CartActions.removeCartItem({id}));
  }

  getProduct$(id: string): Observable<Product> {
    return this.productsStore.select(selectProductById, {id});
  }

  checkout(): void {
    this.cartStore.dispatch(CartActions.checkout());
    this.dialogRef.close();
  }
}
