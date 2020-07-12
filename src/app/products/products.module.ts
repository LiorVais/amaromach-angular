import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductViewComponent],
  exports: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule {}
