import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {CartButtonComponent} from './cart-button/cart-button.component';
import {DialogCartContentComponent} from './dialog-cart-content/dialog-cart-content.component';
import { CartItemComponent } from './dialog-cart-content/cart-item/cart-item.component';
import {StoreModule} from '@ngrx/store';
import * as fromCart from './reducers/cart.reducer';
import {EffectsModule} from "@ngrx/effects";
import {CartEffects} from "./effects/cart.effects";


@NgModule({
  declarations: [CartButtonComponent, DialogCartContentComponent, CartItemComponent],
  exports: [
    CartButtonComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects]),
  ]
})
export class CartModule {
}
