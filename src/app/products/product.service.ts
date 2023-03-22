import { Product } from "./product.model";

export const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
}
