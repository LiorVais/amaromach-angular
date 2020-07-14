import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProductsService} from '../../products/services/products.service';
import {Product} from '../../products/models/product';
import {CartItem} from "../models/cart-item";
import {map} from "rxjs/operators";

@Injectable()
export class CartService {
  private readonly cartContentSubject$ = new BehaviorSubject<CartItem[]>([]);
  readonly cartContent$ = this.cartContentSubject$.asObservable();
  readonly cartItemAmount$ = this.cartContent$.pipe(
    map((cartItems: CartItem[]) =>
      cartItems.reduce((sum: number, cartItem: CartItem) => sum + cartItem.amount, 0)
    )
  );
  readonly totalPrice$ = this.cartContent$.pipe(
    map((cartItems: CartItem[]) =>
      cartItems.reduce((sum: number, cartItem: CartItem) => sum + (cartItem.product.price * cartItem.amount), 0)
    )
  );

  constructor(private productsService: ProductsService) {
  }

  addToCart(product: Product, amountToAdd: number = 1): void {
    this.cartContentSubject$.next([...this.getCartContent(), {product, amount: amountToAdd}]);
  }

  updateAmount(product: Product, amount: number): void {
    const foundItem = this.getCartContent().find(item => item.product.id === product.id);
    if (foundItem) {
      foundItem.amount = amount;
      this.cartContentSubject$.next([...this.getCartContent()])
    }
  }

  removeFromCart(product: Product): void {
    this.cartContentSubject$.next(this.getCartContent().filter(item => item.product.id !== product.id));
  }

  clearCart(): void {
    this.cartContentSubject$.next([]);
  }

  hasProduct(product: Product): boolean {
    return !!this.getCartContent().find(item => item.product.id === product.id);
  }

  checkOut(): void {
    this.getCartContent().forEach((cartItem: CartItem) => this.productsService.buyProduct(cartItem.product, cartItem.amount));
    this.clearCart();
  }

  private getCartContent(): CartItem[] {
    return this.cartContentSubject$.getValue();
  }
}
