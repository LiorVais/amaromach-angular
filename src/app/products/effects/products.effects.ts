import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as ProductActions from '../actions/product.actions';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductsEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return ProductActions.loadProducts();
  }

  constructor(private actions$: Actions, private productsService: ProductsService) {}
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.productsService.getProducts$().pipe(
          map((products: Product[]) =>
            ProductActions.loadProductsSuccess({products})
          ),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({error}))
          )
        )
      )
    )
  );
}
