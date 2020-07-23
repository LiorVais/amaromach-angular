import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, tap, withLatestFrom} from 'rxjs/operators';

import {CartActions} from "../actions";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {CartItemsState, selectAllCartItems} from "../reducers/cart.reducer";
import * as ProductActions from "../../products/actions/product.actions";
import {ProductsState} from "../../products/reducers/products.reducer";

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartStore: Store<CartItemsState>, private productsStore: Store<ProductsState>) {
  }

  checkout = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.checkout),
      withLatestFrom(this.cartStore.select(selectAllCartItems)),
      tap(([action, cartItems]) => cartItems.forEach(item => this.productsStore.dispatch(ProductActions.buyProduct({
        id: item.productId,
        amount: item.amount
      })))),
      map(CartActions.checkoutSuccess)
    )
  );
}
