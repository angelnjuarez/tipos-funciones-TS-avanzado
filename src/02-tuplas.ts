const prices: (number | string)[] = [10, 20, 30];
prices.push(25);
prices.push('25');

const user: [string, number] = ['angel', 31]; // Tuple, si o si string en el primer lugar y number en el segundo lugar

const [username, age] = user; // Destructuring
