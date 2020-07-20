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

export const selectCurrentProductId = createSelector(
  selectProductsState,
  fromProducts.getSelectedProductId
);

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAllProducts
);

export const selectCurrentProduct = createSelector(
  selectUserEntities,
  selectCurrentProductId,
  (productEntities, productId) => productEntities[productId]
);
