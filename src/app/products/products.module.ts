import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product-list/product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {RouterModule} from '@angular/router';
import {ProductsService} from "./services/products.service";
import * as fromProducts from './reducers/products.reducer';
import {StoreModule} from "@ngrx/store";
import {ProductsEffects} from "./effects/products.effects";
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductViewComponent],
  providers: [ProductsService],
  exports: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductsEffects]),
  ]
})
export class ProductsModule {
}
