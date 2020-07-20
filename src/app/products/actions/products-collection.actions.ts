import {createAction, props} from '@ngrx/store';
import {Product} from '../models/product';

export const loadProductsSuccess = createAction(
  '[Products Collection] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products Collection] Load Products Failure',
  props<{ error: any }>()
);
