import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, switchMap, tap, withLatestFrom} from 'rxjs/operators';

import * as CartActions from "../actions/cart.actions";
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
      mergeMap(([action, cartItems]) => [...cartItems.map(item => ProductActions.buyProduct({
        id: item.productId,
        amount: item.amount
      })),
      CartActions.checkoutSuccess()]),
    )
  );
}
