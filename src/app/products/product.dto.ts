import { Product } from "./product.model";

//Omit permite excluir atributos de un objeto, para evitar la redundancia,
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

//type example = Pick<Product, 'color' | 'description'>; //Misma idea de Omit, pero en vez de excluir, incluye los atributos que se le indiquen

export interface UpdateProductDto extends Partial<CreateProductDto>{}; //Partial permite que los atributos sean opcionales

//type example = Required<Product>; //Todos los atributos obligatorios.

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>; //no me permite hacer métodos mutables, como push, pop, etc.
};
