// Nico => [N, i, c, o] string => string[]
// [N, i, c, o] => Nico string[] => string

function parseString(input: string | string[]): string | string[] {
  if(Array.isArray(input)){
    return input.join('');
  }else{
    return input.split('');
  }
}

const rtaString = parseString(['N', 'i', 'c', 'o']);
console.log(rtaString);

const rtaArray = parseString('Nico');
console.log(rtaArray);

//El problema es que como tenemos un string | string[], TS no puede inferir el tipo, ya que tiene dos posibles tipos
//Por ello no podemos invocar metodos de los dos tipos, por ejemplo, el metodo join() solo existe en el tipo string[]
