export const createProduct = (
  id: string | number,
  stock?: number, //van al final
  isNew?: boolean,
) => {
  return {
    id,
    stock: stock ?? 0, //si stock es undefined, se asigna 0
    isNew: isNew ?? false, //si isNew es undefined, se asigna false
  };
}

//En JS
// 0 === false
// '' === false
// false === false
//Por eso || genera problemas, y se usa ?? para evitarlos
//ya que, tiene en cuenta los datos null y undefined

const p1 = createProduct(1, 12, true);
console.log(p1);
const p2 = createProduct(2, undefined, true); //stock queda undefined
console.log(p2);
