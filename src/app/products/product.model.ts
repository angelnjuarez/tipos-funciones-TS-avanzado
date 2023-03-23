import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  imagen: string;
  description: string;
  stock: number;
  sizes?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
