//1. Ask the user for two numbers. 2. Ask user for type of operation to peform: add, sub, mult, div. 3. Perform calculation and display result.
//Ask user for the first num. 
//Ask user for the second number. 
//Ask user for an operation to perform. 
//Perform operator on two numbers
//Print results

const readline = require('readline-sync');
console.log('Welcome to Calculator Mania!');

console.log('What is the first number, patron.');
let number1 = readline.question();

console.log('What is the second number?');
let number2 = readline.question();

console.log(`${number1} ${number2}`);

console.log('What operation would you like me to perform?\n1) Add 2) Subtract 3) Multply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2);
} else if (operation === '3') {
   output = Number(number1) * Number(number2);
} else if (operation === '4') {
   output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);
