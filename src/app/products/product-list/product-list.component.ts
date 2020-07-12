import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  constructor(public productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

}
