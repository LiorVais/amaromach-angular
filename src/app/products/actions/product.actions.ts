import {createAction, props} from '@ngrx/store';
import {Product} from '../models/product';

export enum ActionTypes {
  UPDATE_PRODUCT = '[Products] Update Product',
  BUY_PRODUCT = '[Products] Buy Product',
  LOAD_PRODUCTS = '[Products] Load Products',
  LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success',
  LOAD_PRODUCTS_FAILURE = '[Products] Load Products Failure',
}

export const updateProduct = createAction(ActionTypes.UPDATE_PRODUCT,
  props<{ id: string, changes: Partial<Product> }>()
);

export const buyProduct = createAction(ActionTypes.BUY_PRODUCT,
  props<{ id: string, amount: number }>()
);

export const loadProducts = createAction(ActionTypes.LOAD_PRODUCTS);

export const loadProductsSuccess = createAction(ActionTypes.LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(ActionTypes.LOAD_PRODUCTS_FAILURE,
  props<{ error: any }>()
);
