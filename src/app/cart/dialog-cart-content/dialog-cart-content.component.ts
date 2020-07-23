import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {CartActions} from "../actions";
import {select, Store} from "@ngrx/store";
import {selectTotalPrice, selectAllCartItems, CartItemsState} from "../reducers/cart.reducer";
import {Observable} from "rxjs";
import {CartItem} from "../models/cart-item";

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
    private cartStore: Store<CartItemsState>) {
    this.totalPrice$ = cartStore.pipe(select(selectTotalPrice));
    this.cartContent$ = cartStore.pipe(select(selectAllCartItems));
  }

  updateAmount(id: string, amount: number) {
    this.cartStore.dispatch(CartActions.updateCartItem({update: {id, changes: {amount}}}));
  }

  removeFromCart(id: string) {
    this.cartStore.dispatch(CartActions.removeCartItem({id}));
  }

  checkout(): void {
    this.cartStore.dispatch(CartActions.checkout());
    this.dialogRef.close();
  }
}
