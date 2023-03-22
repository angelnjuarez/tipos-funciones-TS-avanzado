type Sizes = 'S' | 'M' | 'L' | 'XL';

type userId = string | number; //no se puede usar en interfaces de este modo tan directo y pequeño
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   sizes?: Sizes;
// }

interface Product { //Se pueden extender y heredar, los types no.
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  sizes?: Sizes;
}

const product: Product[] = [];

product.push({
  id: '1',
  title: 'T-shirt',
  createdAt: new Date(),
  stock: 10,
});

const addProduct = (item: Product) => {
  product.push(item);
}
