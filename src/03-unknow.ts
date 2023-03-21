//Puede ser cualquier cosa, por eso es una mala práctica
let anyVar: any;
anyVar = 1;
anyVar = "string";
anyVar = true;

let isNew: boolean = anyVar; //por más que tenga tipado, como any es cualquier cosa, se puede asignar igual

anyVar.doSomething();
anyVar.toUpperCase();

// Unknown es igual de dinámico que any, pero no se puede asignar a nada
let unknownVar: unknown;
unknownVar = 1;
unknownVar = "string";
unknownVar = true;
unknownVar = {};

//unknownVar.doSomething(); // Error
//unknownVar.toUpperCase(); // Error
if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}

//let isNew2: boolean = unknownVar; // Error
