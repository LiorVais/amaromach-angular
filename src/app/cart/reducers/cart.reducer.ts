import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
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

export const reducer = createReducer(
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

const {
  selectIds,
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

export const selectCartItemsIds = createSelector(
  selectCartState,
  selectIds
);

export const selectTotalPrice = createSelector(
  selectAllCartItems,
  (cartItems) => cartItems.reduce((acc, item) => acc + (item.price * item.amount), 0)
);
