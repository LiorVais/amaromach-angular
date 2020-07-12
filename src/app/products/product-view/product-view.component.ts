import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductsService} from '../../core/services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less']
})
export class ProductViewComponent implements OnInit {
  public product: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = this.productsService.getProductById(+params.get('productId'));
    });
  }

}
