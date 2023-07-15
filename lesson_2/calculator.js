//Ask the user if they want to do another calculation
//Extract messages in program to a configuration problem
//Internationalize the messages in your calculator
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'es';

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

const readline = require('readline-sync');
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}



prompt('welcome');


while (true) {
prompt('firstNum');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('invalidNum');
  number1 = readline.question();
}

prompt('secondNum');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('Miss ma\'am. I need you to input a valid number.');
  number2 = readline.question();
}

prompt('operation');
let operation = readline.question();
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('pickNum');
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

prompt('contQuestion');
let answer = readline.question();

if (answer[0].toLowerCase() !== 'y') break;

};




  



