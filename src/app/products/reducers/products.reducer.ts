import {Action, createReducer, on} from "@ngrx/store";
import {ProductActions, ProductsCollectionActions} from "../actions";
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
    ProductsCollectionActions.loadProductsSuccess,
    (state, {products}) => adapter.addMany(products, state)),
  on(
    ProductActions.updateProduct,
    (state, product: Update<Product>) => adapter.updateOne(product, state)),
  on(
    ProductActions.selectProduct,
    (state, {id}) => ({...state, selectedProductId: id})),
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
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectProductsIds = selectIds;
export const selectProductsEntities = selectEntities;
export const selectAllProducts = selectAll;
export const selectProductsTotal = selectTotal;
