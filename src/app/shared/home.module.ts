import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AccountsDropdownComponent } from './accounts-dropdown/accounts-dropdown.component';
import {CartModule} from '../cart/cart.module';
import {MatMenuModule} from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    HeaderComponent,
    AccountsDropdownComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CartModule,
    MatMenuModule,
    OverlayModule,
    MatGridListModule
  ]
})
export class HomeModule { }
