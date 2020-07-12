import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JsonReaderService } from './json-reader.service';
import { CoreModule } from '../core.module';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isLimited: boolean;
  stock: number;
}

@Injectable({
  providedIn: CoreModule
})
export class ProductsService {
  private readonly products = new BehaviorSubject<Product[]>([]);
  readonly products$ = this.products.asObservable();

  constructor(private jsonReaderService: JsonReaderService) {
    this.jsonReaderService.getData('/assets/json/products.json').subscribe(products => this.products.next(products));
  }

  getProducts(): Product[] {
    return this.products.getValue();
  }

  getProductById(productId: number): Product {
    return this.getProducts().find((product: Product) => product.id === productId);
  }

  buyProduct(product: Product, amount: number): void {
    if (product.isLimited) {
      product.stock -= amount;
    }
  }

  isInStock(product: Product): boolean {
    return !product.isLimited || product.stock > 0;
  }
}
