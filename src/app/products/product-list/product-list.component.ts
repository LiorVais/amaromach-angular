import { Component } from '@angular/core';

import { Product } from '../models/product';
import { select, Store } from '@ngrx/store';
import { ProductsState, selectAllProducts } from '../reducers/products.reducer';
import { selectAllCartItems } from '../../cart/reducers/cart.reducer';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';
import * as CartActions from '../../cart/actions/cart.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<ProductsState>, public productsService: ProductsService) {
    this.products$ = store.pipe(select(selectAllProducts));
  }

  isProductInCart$(product: Product): Observable<boolean> {
    return this.store.pipe(
      select(selectAllCartItems)
    ).pipe(
      map((cartItems) => cartItems.map(cartItem => cartItem.productId).includes(product.id)))
  }

  addToCart(product: Product): void {
    this.store.dispatch(CartActions.addProductToCart({product}));
  }

  removeFromCart(product: Product): void {
    this.store.dispatch(CartActions.removeCartItem({id: product.id}));
  }
}
