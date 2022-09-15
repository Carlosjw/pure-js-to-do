let numbers = [];

for(let i =0; i <= 100; i++){
    numbers.push(i)
}

const pares = numbers.filter(number => number % 2 == 0);

const impares = numbers.filter(number => number % 2 !== 0)

console.log(pares);
console.log(impares)

// console.log(numbers)