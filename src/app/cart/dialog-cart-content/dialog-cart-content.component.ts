import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../products/modals/product';
import {CartService} from '../services/cart.service';

export interface DialogData {
  products: Product[];
}

@Component({
  selector: 'app-dialog-cart-content',
  templateUrl: './dialog-cart-content.component.html',
  styleUrls: ['./dialog-cart-content.component.less']
})
export class DialogCartContentComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCartContentComponent>, public cartService: CartService) {
  }

  checkout(): void {
    this.cartService.checkOut();
    this.dialogRef.close();
  }
}
