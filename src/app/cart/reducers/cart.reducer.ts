import {Action, createReducer, on} from "@ngrx/store";
import {CartActions} from "../actions";
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

export const cartReducer = createReducer(
  initialState,
  on(
    CartActions.addProductToCart,
    (state, {product}) => {
      const cartItem: CartItem = {productId: product.id, price: product.price, amount: 1};
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

export function reducer(state: CartItemsState | undefined, action: Action) {
  return cartReducer(state, action)
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectCartItemsIds = selectIds;
export const selectCartItemsEntities = selectEntities;
export const selectAllCartItems = selectAll;
export const selectCartItemsTotal = selectTotal;
