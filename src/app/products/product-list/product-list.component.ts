import {Component} from '@angular/core';

import {Product} from '../models/product';
import {select, Store} from '@ngrx/store';
import * as fromProducts from '../reducers';
import * as fromCart from '../../cart/reducers';
import {Observable} from 'rxjs';
import {ProductsService} from '../services/products.service';
import {CartActions} from "../../cart/actions";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromProducts.ProductsState>, public productsService: ProductsService) {
    this.products$ = store.pipe(select(fromProducts.selectAllProducts));
  }

  isProductInCart(product: Product) {
    return this.store.pipe(
      select(fromCart.selectAllCartItems)
    ).pipe(
      map((cartItems) => cartItems.map(cartItem => cartItem.productId).includes(product.id)))
  }

  addToCart(product: Product) {
    this.store.dispatch(CartActions.addProductToCart({product}));
  }

  removeFromCart(product: Product) {
    this.store.dispatch(CartActions.removeCartItem({id: product.id}));
  }
}
