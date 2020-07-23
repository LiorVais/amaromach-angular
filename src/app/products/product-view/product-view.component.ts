import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromProducts from "../reducers";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less']
})
export class ProductViewComponent implements OnInit {
  public product$: Observable<Product>;

  constructor(private route: ActivatedRoute, private productsStore: Store<fromProducts.ProductsState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product$ = this.productsStore.select(fromProducts.selectProductById(+params.get('productId')))
    });
  }

}
