import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, withLatestFrom} from 'rxjs/operators';

import {CartActions} from "../actions";
import {Injectable} from "@angular/core";
import {ProductsService} from "../../products/services/products.service";
import {Store} from "@ngrx/store";
import * as fromCart from "../reducers";

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartStore: Store<fromCart.CartState>, private productsService: ProductsService) {
  }

  checkout = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.checkout),
      withLatestFrom(this.cartStore.select(fromCart.selectAllCartItems)),
      map(([action, cartItems]) => {
        cartItems.forEach(item => this.productsService.buyProduct(item.productId, item.amount));
        return CartActions.checkoutSuccess();
      })
    )
  );
}
