import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromProducts from "./products/reducers";
import {ProductListPageActions} from "./products/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'amaRomach';

  constructor(private store: Store<fromProducts.ProductsState>) {
  }

  ngOnInit() {
    this.store.dispatch(ProductListPageActions.enter());
  }
}
