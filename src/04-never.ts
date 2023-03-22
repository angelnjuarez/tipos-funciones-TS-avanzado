//Te alerta que es un ciclo infinito
const withoutEnd = () => {
  while (true) {
    console.log('Hello, World!');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}


//También termina una función al invocar una excepción. fail() => never
const example = (input: unknown)  => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('No se pudo determinar el tipo de input');
}

console.log(example('hola'));
console.log(example([1, 2, 3]));
console.log(example(1));
console.log(example('Hola después del fail'));
