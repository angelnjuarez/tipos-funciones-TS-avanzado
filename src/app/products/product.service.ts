import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}

export const updateProduct = (id: string, change: Product): void => {
  let index = getIndexProduct(id);
  products.splice(index, 1, change);
}

export const deleteProduct = (id: string): void => {
  let index = getIndexProduct(id);
  products.splice(index, 1);
}

export const getIndexProduct = (id: string): number => {
  return products.findIndex((product) => product.id === id);
};
