import {Action, createReducer, on} from "@ngrx/store";
import {ProductActions, ProductsCollectionActions} from "../actions";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Product} from "../models/product";

export const productsFeatureKey = 'products';

export interface ProductsState extends EntityState<Product> {
  selectedProductId: string | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id,
  sortComparer: false,
});

export const initialState: ProductsState = adapter.getInitialState({
  selectedProductId: null
});

export const productsReducer = createReducer(
  initialState,
  on(
    ProductsCollectionActions.loadProductsSuccess,
    (state, {products}) => adapter.addMany(products, state)),
  on(
    ProductActions.updateProduct,
    (state, product) => adapter.updateOne(product, state)),
  on(
    ProductActions.selectProduct,
    (state, {id}) => ({...state, selectedProductId: id})),
);

export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action)
}

export const getSelectedProductId = (state: ProductsState) => state.selectedProductId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectProductsIds = selectIds;
export const selectProductsEntities = selectEntities;
export const selectAllProducts = selectAll;
export const selectProductsTotal = selectTotal;
