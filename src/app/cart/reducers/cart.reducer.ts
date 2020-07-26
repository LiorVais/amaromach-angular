import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as CartActions from "../actions/cart.actions";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {CartItem} from "../models/cart-item";

export const cartFeatureKey = 'cart';

export interface CartItemsState extends EntityState<CartItem> {
}

export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>({
  selectId: (cartItem: CartItem) => cartItem.productId,
  sortComparer: false,
});

export const initialState: CartItemsState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(
    CartActions.addProductToCart,
    (state, {product}) => {
      const cartItem: CartItem = {productId: product.id, amount: 1};
      return adapter.addOne(cartItem, state)
    }),
  on(
    CartActions.updateCartItem,
    (state, {update}) => adapter.updateOne(update, state)),
  on(
    CartActions.removeCartItem,
    (state, {id}) => adapter.removeOne(id, state)),
  on(
    CartActions.checkoutSuccess,
    (state) => adapter.removeAll(state)),
);

const {
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectCartState = createFeatureSelector<CartItemsState>('cart');

export const selectCartEntities = createSelector(
  selectCartState,
  selectEntities
);

export const selectAllCartItems = createSelector(
  selectCartState,
  selectAll
);

export const selectCartItemsTotal = createSelector(
  selectCartState,
  selectTotal
);
