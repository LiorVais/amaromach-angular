import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import {ProductListPageActions, ProductsCollectionActions} from '../actions';
import {Product} from '../models/product';
import {ProductsService} from '../services/products.service';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private productsService: ProductsService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListPageActions.enter),
      switchMap(() =>
        this.productsService.getProducts().pipe(
          map((products: Product[]) =>
            ProductsCollectionActions.loadProductsSuccess({products})
          ),
          catchError((error) =>
            of(ProductsCollectionActions.loadProductsFailure({error}))
          )
        )
      )
    )
  );
}
