import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ProductsState, selectProductById} from "../reducers/products.reducer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less']
})
export class ProductViewComponent implements OnInit {
  public product$: Observable<Product>;

  constructor(private route: ActivatedRoute, private productsStore: Store<ProductsState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product$ = this.productsStore.select(selectProductById, {id: +params.get('productId')});
    });
  }

}
