import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../services/products.service';
import {Product} from '../modals/product';
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less']
})
export class ProductViewComponent implements OnInit {
  public product: Observable<Product>;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = this.productsService.getProductById$(+params.get('productId'));
    });
  }

}
