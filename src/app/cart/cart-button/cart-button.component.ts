import { Component } from '@angular/core';
import { DialogCartContentComponent } from '../dialog-cart-content/dialog-cart-content.component';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { CartItemsState, selectCartItemsTotal } from '../reducers/cart.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less']
})
export class CartButtonComponent {
  cartItemsTotal$: Observable<number>;

  constructor(private cartStore: Store<CartItemsState>, public dialog: MatDialog) {}

  ngOnInit() {
    this.cartItemsTotal$ = this.cartStore.pipe(select(selectCartItemsTotal));
  }

  openDialog(): void {
    this.dialog.open(DialogCartContentComponent, {
      minWidth: '800px'
    });
  }
}
