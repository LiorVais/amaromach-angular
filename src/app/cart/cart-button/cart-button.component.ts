import {Component} from '@angular/core';
import {DialogCartContentComponent} from '../dialog-cart-content/dialog-cart-content.component';
import {MatDialog} from '@angular/material/dialog';
import {select, Store} from "@ngrx/store";
import * as fromCart from '../reducers';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less']
})
export class CartButtonComponent {
  cartItemsTotal$: any;

  constructor(private store: Store<fromCart.CartState>, public dialog: MatDialog) {}

  ngOnInit() {
    this.cartItemsTotal$ = this.store.pipe(select(fromCart.selectCartItemsTotal));
  }

  openDialog(): void {
    this.dialog.open(DialogCartContentComponent, {
      minWidth: '800px'
    });
  }
}
