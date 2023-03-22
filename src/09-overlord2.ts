// Nico => [N, i, c, o] string => string[]
// [N, i, c, o] => Nico string[] => string

//Overload
export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;


// export function parseString(input: string | string[]): string | string[] {
//   if(Array.isArray(input)){
//     return input.join('');
//   }else{
//     return input.split('');
//   }
// }

export function parseString(input: unknown): unknown {
  if(Array.isArray(input)){
    return input.join('');
  }else if (typeof input === 'string'){
    return input.split('');
  }else if (typeof input === 'number'){
    return true;
  }
}

const rtaString = parseString(['N', 'i', 'c', 'o']);
rtaString.toLocaleLowerCase();
console.log('rtaString', '[N, i, c, o] => ', rtaString);

const rtaArray = parseString('Nico');
rtaArray.reverse();
console.log('rtaArray', 'Nico => ', rtaArray);

const rtaBoolean = parseString(123);
console.log('rtaBoolean', 'Es number', rtaBoolean);
