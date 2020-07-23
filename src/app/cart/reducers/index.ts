import * as fromCart from './cart.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface CartState {
  cart: fromCart.CartItemsState
}

export const reducers: ActionReducerMap<CartState> = {
  cart: fromCart.reducer
};

export const selectCartState = createFeatureSelector<fromCart.CartItemsState>('cart');

export const selectCartEntities = createSelector(
  selectCartState,
  fromCart.selectCartItemsEntities
);

export const selectAllCartItems = createSelector(
  selectCartState,
  fromCart.selectAllCartItems
);

export const selectCartItemsTotal = createSelector(
  selectCartState,
  fromCart.selectCartItemsTotal
);

export const selectCartItemsIds = createSelector(
  selectCartState,
  fromCart.selectCartItemsIds
);

export const selectTotalPrice = createSelector(
  selectAllCartItems,
  (cartItems) => cartItems.reduce((acc, item) => acc + (item.price * item.amount), 0)
);
