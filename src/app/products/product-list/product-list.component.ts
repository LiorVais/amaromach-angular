import { Component } from '@angular/core';

import {Product} from '../models/product';
import {CartService} from '../../cart/services/cart.service';
import {select, Store} from '@ngrx/store';
import * as fromProducts from '../reducers'
import {Observable} from 'rxjs';
import {ProductsService} from '../services/products.service';
import {ProductListPageActions} from '../actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromProducts.ProductsState>, public cartService: CartService, public productsService: ProductsService) {
    this.products$ = store.pipe(select(fromProducts.selectAllProducts));
  }

  ngOnInit() {
    this.store.dispatch(ProductListPageActions.enter());
  }
}
