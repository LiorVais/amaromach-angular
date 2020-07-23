import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {JsonReaderService} from '../../core/services/json-reader.service';
import {Product} from '../models/product';
import * as fromProducts from '../../products/reducers';
import {Store} from "@ngrx/store";
import {ProductActions} from "../actions";

@Injectable()
export class ProductsService {
  constructor(private jsonReaderService: JsonReaderService, private productsStore: Store<fromProducts.ProductsState>) {
  }

  buyProduct(id: string, amount: number) {
    return this.productsStore.dispatch(ProductActions.buyProduct({id, amount}))
  }

  isInStock(product: Product): boolean {
    return !product.isLimited || product.stock > 0;
  }

  getProducts(): Observable<Product[]> {
    return this.jsonReaderService.getData<Product[]>('/assets/json/products.json')
  }
}
