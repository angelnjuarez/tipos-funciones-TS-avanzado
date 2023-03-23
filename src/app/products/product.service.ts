import { faker } from "@faker-js/faker";
import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto , FindProductDto} from "./product.dto";

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

export const updateProduct = (id: Product['id'], change: UpdateProductDto): Product => { //obtenemos el tipo de dato de la propiedad id de Product, evita errores de cambio de tipado
  let index = getIndexProduct(id);
  const prevDta = products[index];
  products[index] = {
    ...prevDta, //operador spread evita el aliasing, al apuntar dos variables a la misma referencia de memoria
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

export const findProduct = (dto: FindProductDto): Product[] => {
  //code
  //  dto.color = 'red'; //Esto no se puede hacer, porque es de solo
  //dto.tags?.pop(); //Esto si se puede hacer y está mutando el objeto. Se soluciona con omit y readonly en prduct.dto.ts
  return products;
};
