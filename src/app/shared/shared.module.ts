import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AccountsDropdownComponent } from './header/accounts-dropdown/accounts-dropdown.component';
import { CartModule } from '../cart/cart.module';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';


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
    RouterModule
  ]
})
export class SharedModule { }
