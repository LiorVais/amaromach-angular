import {Product} from "../../products/modals/product";

export interface CartItem {
  product: Product;
  amount: number;
}
