import { faker } from "@faker-js/faker";
import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto} from "./product.dto";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: string, change: UpdateProductDto): Product => {
  let index = getIndexProduct(id);
  const prevDta = products[index];
  products[index] = {
    ...prevDta,
    ...change,
  }
  return products[index];
}

export const deleteProduct = (id: string): void => {
  let index = getIndexProduct(id);
  products.splice(index, 1);
}

export const getIndexProduct = (id: string): number => {
  return products.findIndex((product) => product.id === id);
};
