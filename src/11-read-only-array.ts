const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers.push(6); //Error
// numbers.pop();
// numbers.unshift(0);

//sólo deja usar los métodos que no modifican el array
numbers.filter(() => {});
numbers.map(() => {});
numbers.reduce(() => 0);
