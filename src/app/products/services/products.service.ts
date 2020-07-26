import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonReaderService } from '../../core/services/json-reader.service';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  constructor(private jsonReaderService: JsonReaderService) {
  }

  isInStock(product: Product): boolean {
    return !product.isLimited || product.stock > 0;
  }

  getProducts$(): Observable<Product[]> {
    return this.jsonReaderService.getData<Product[]>('/assets/json/products.json')
  }
}
