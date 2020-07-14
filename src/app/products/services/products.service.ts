import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {JsonReaderService} from '../../core/services/json-reader.service';
import {Product} from '../models/product';

@Injectable()
export class ProductsService {
  private readonly productsSubject$ = new BehaviorSubject<Product[]>([]);
  readonly products$ = this.productsSubject$.asObservable();

  constructor(private jsonReaderService: JsonReaderService) {
    this.jsonReaderService.getData<Product[]>('/assets/json/products.json').subscribe(products => this.productsSubject$.next(products));
  }

  getProductById$(productId: number): Observable<Product> {
    return this.products$.pipe(
      map((products: Product[]) =>
        products.find((product: Product) => product.id === productId)
      )
    );
  }

  buyProduct(product: Product, amount: number): void {
    if (product.isLimited) {
      product.stock -= amount;
      this.productsSubject$.next([...this.getProducts()]);
    }
  }

  isInStock(product: Product): boolean {
    return !product.isLimited || product.stock > 0;
  }

  private getProducts(): Product[] {
    return this.productsSubject$.getValue();
  }
}
