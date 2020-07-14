import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductViewComponent} from './products/product-view/product-view.component';
import {ProductListComponent} from './products/product-list/product-list.component';


const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:productId', component: ProductViewComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
