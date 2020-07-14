import { Component } from '@angular/core';

import {ProductsService} from '../services/products.service';
import {CartService} from "../../cart/services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {

  constructor(public productsService: ProductsService, public cartService: CartService) {
  }

}
