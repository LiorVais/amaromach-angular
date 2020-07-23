import {createAction, props} from '@ngrx/store';
import {Product} from '../models/product';

export enum ActionTypes {
  UPDATE_PRODUCT = '[Products] Update Product',
  SELECT_PRODUCT = '[Products] Select Product',
  BUY_PRODUCT = '[Products] Buy Product',
}

export const updateProduct = createAction(ActionTypes.UPDATE_PRODUCT,
  props<{ id: string, changes: Partial<Product> }>()
);

export const selectProduct = createAction(ActionTypes.SELECT_PRODUCT,
  props<{ id: string }>()
);

export const buyProduct = createAction(ActionTypes.BUY_PRODUCT,
  props<{ id: string, amount: number }>()
);
