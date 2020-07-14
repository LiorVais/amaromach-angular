import {Product} from "../../products/models/product";

export interface CartItem {
  product: Product;
  amount: number;
}
