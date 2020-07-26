import { createAction, props } from '@ngrx/store';
import { CartItem } from '../models/cart-item';
import { Product } from '../../products/models/product';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = '[Cart] Add Product To Cart',
  UPDATE_CART_ITEM = '[Cart] Update Cart Item',
  REMOVE_CART_ITEM = '[Cart] Remove Cart Item',
  CHECKOUT = '[Cart] Checkout',
  CHECKOUT_SUCCESS = '[Cart] Checkout Success',
}

export const addProductToCart = createAction(ActionTypes.ADD_PRODUCT_TO_CART,
  props<{ product: Product }>()
);

export const updateCartItem = createAction(ActionTypes.UPDATE_CART_ITEM,
  props<{ update: Update<CartItem> }>()
);

export const removeCartItem = createAction(ActionTypes.REMOVE_CART_ITEM,
  props<{ id: string }>()
);

export const checkout = createAction(ActionTypes.CHECKOUT);

export const checkoutSuccess = createAction(ActionTypes.CHECKOUT_SUCCESS);
