import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product, ProductsService} from './products.service';
import {CoreModule} from '../core.module';

export interface CartItem {
  product: Product;
  amount: number;
}

@Injectable({
  providedIn: CoreModule
})
export class CartService {
  private readonly cartContent = new BehaviorSubject<CartItem[]>([]);
  readonly cartContent$ = this.cartContent.asObservable();

  constructor(private productsService: ProductsService) {
  }

  getCartContent(): CartItem[] {
    return this.cartContent.getValue();
  }

  addToCart(product: Product, amountToAdd: number = 1): void {
    const foundItem = this.getCartContent().find(item => item.product === product);
    if (foundItem) {
      foundItem.amount += amountToAdd;
    } else {
      this.cartContent.next([...this.getCartContent(), {product, amount: amountToAdd}]);
    }
  }

  removeFromCart(product: Product): void {
    this.cartContent.next(this.getCartContent().filter(item => item.product !== product));
  }

  clearCart(): void {
    this.cartContent.next([]);
  }

  getItemAmount(): number {
    return this.getCartContent().reduce((sum: number, val: CartItem) => sum + val.amount, 0);
  }

  hasProduct(product: Product): boolean {
    return !!this.getCartContent().find(item => item.product === product);
  }

  getTotalPrice(): number {
    return this.getCartContent().reduce((sum: number, item: CartItem) => sum + (item.product.price * item.amount), 0);
  }

  checkOut(): void {
    this.getCartContent().forEach((cartItem: CartItem) => this.productsService.buyProduct(cartItem.product, cartItem.amount));
    this.clearCart();
  }
}
