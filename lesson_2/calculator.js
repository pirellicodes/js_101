const readline = require('readline-sync');
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}


prompt('Welcome to Calculator Mania!');

prompt('What is the first number, patron.');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Miss ma'am. I need you to input a valid number.");
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Miss ma'am. I need you to input a valid number.");
  number2 = readline.question();
}

prompt('What operation would you like me to perform?\n1) Add 2) Subtract 3) Multply 4) Divide');
let operation = readline.question();
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Pick a number...1, 2, 3, or 4 are the only exceptable answers. *sigh*");
  operation = readline.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}


prompt(`The result is: ${output}`);
