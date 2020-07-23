import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as ProductActions from "../actions/product.actions";
import {createEntityAdapter, EntityAdapter, EntityState, Update} from "@ngrx/entity";
import {Product} from "../models/product";

export const productsFeatureKey = 'products';

export interface ProductsState extends EntityState<Product> {}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id,
  sortComparer: false,
});

export const initialState: ProductsState = adapter.getInitialState();

export const productsReducer = createReducer(
  initialState,
  on(
    ProductActions.loadProductsSuccess,
    (state, {products}) => adapter.addMany(products, state)),
  on(
    ProductActions.updateProduct,
    (state, product: Update<Product>) => adapter.updateOne(product, state)),
  on(
    ProductActions.buyProduct,
    (state, {id, amount}) => {
      const product: Product = adapter.getSelectors().selectEntities(state)[id];
      if (product.isLimited && product.stock >= amount) {
        const productChanges: Update<Product> = {id: product.id, changes: {stock: product.stock - amount}};
        return adapter.updateOne(productChanges, state);
      }
      return state;
    })
);

export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action)
}

const {
  selectEntities,
  selectAll,
} = adapter.getSelectors();

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectUserEntities = createSelector(
  selectProductsState,
  selectEntities
);

export const selectAllProducts = createSelector(
  selectProductsState,
  selectAll
);

export const selectProductById = createSelector(
  selectUserEntities,
  (products, props) => products[props.id]
);
