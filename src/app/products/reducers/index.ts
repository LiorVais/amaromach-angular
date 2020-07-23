import * as fromProducts from '../reducers/products.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface ProductsState {
  products: fromProducts.ProductsState
}

export const reducers: ActionReducerMap<ProductsState> = {
  products: fromProducts.reducer
};

export const selectProductsState = createFeatureSelector<fromProducts.ProductsState>('products');

export const selectUserEntities = createSelector(
  selectProductsState,
  fromProducts.selectProductsEntities
);

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAllProducts
);

export const selectProductById = (id) => createSelector(
  selectUserEntities,
  (products) => products[id]
);
