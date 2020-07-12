import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../core/services/products.service';
import {CartService} from '../../core/services/cart.service';

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
    public dialogRef: MatDialogRef<DialogCartContentComponent>,
    public cartService: CartService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  checkout(): void {
    this.cartService.checkOut();
    this.dialogRef.close();
  }

}
