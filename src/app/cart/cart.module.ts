import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {CartButtonComponent} from './cart-button/cart-button.component';
import {DialogCartContentComponent} from './dialog-cart-content/dialog-cart-content.component';
import {CartService} from '../core/services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  declarations: [CartButtonComponent, DialogCartContentComponent, CartItemComponent],
  exports: [
    CartButtonComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule
  ]
})
export class CartModule {
}
