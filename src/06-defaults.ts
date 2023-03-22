//Por defecto
export const createProduct = (
  id: string | number,
  stock: number = 10, //Siguen siendo opcionales
  isNew: boolean = true,
) => {
  return {
    id,
    stock: stock,
    isNew: isNew,
  };
}

const p1 = createProduct(1, 12, true);
console.log(p1);
const p2 = createProduct(2, undefined, true);
console.log(p2);
