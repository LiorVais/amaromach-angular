import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product-list/product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {RouterModule} from '@angular/router';
import {ProductsService} from "./services/products.service";


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductViewComponent],
  providers: [ProductsService],
  exports: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule {
}
