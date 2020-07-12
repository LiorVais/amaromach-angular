import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DialogCartContentComponent} from '../dialog-cart-content/dialog-cart-content.component';
import {MatDialog} from '@angular/material/dialog';
import {CartService} from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less']
})
export class CartButtonComponent implements OnInit {

  constructor(public dialog: MatDialog, public cartService: CartService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCartContentComponent, {
      data: {},
      minWidth: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
