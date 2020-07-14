import {Component} from '@angular/core';
import {DialogCartContentComponent} from '../dialog-cart-content/dialog-cart-content.component';
import {MatDialog} from '@angular/material/dialog';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less']
})
export class CartButtonComponent {
  constructor(public dialog: MatDialog, public cartService: CartService) {}

  openDialog(): void {
    this.dialog.open(DialogCartContentComponent, {
      minWidth: '800px'
    });
  }
}
