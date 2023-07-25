const MESSAGES = require('./loancalc_messages.json');

const readline = require('readline-sync');

function messages(message) {
  return MESSAGES[message];
}

function prompt(key) {
  let message = messages(key);
  console.log(`-> ${message}`);
}

function invalidLoanAmount(num) {
  return num.trimStart() === '' ||
    Number.isNaN(Number(num))   ||
    Number(num) <= 0;
}

function invalidAnnualPerRate(num) {
  return Number.isNaN(Number(num))   ||
    Number(num) <= 0                 ||
    num.trimStart() === ''           ||
   !num.includes('.');
}

function incorrectTermFormat(loan) {
  return  Number.isNaN(Number(loan)) ||
          loan.trimStart() === ''    ||
          Number(loan) < 12;

}

function invalidContResponse(answer) {
  return !['yes', 'y', 'no', 'n'].includes(answer.toLowerCase());
  //this didnt work -> answer !== ('yes' || 'y') || ('no' || 'n')
  //spent too long here so I used another students code for this check
}

function formatAsPercent(num) {
  return parseFloat(num) * 100;
}

function loanCalculatorBrains (loanAmo, yearlyPercentRate, loanTerm) {
  let monthlyIntRate = yearlyPercentRate / 12;
  let monthlyPayments = loanAmo *
  (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-loanTerm))));

  let totalInt = (12 * loanTerm / 12 * monthlyPayments) - loanAmo;
  let finalTotal = loanAmo + totalInt;
  let amountOfPays = loanTerm;
  console.log(`-> Yer' monthly payment is: $${monthlyPayments.toFixed(2)}\n-> Yer' total interest you'ms wuld pay is: $${totalInt.toFixed(2)}\n-> Wot' yer payin' in total after ${amountOfPays} payments plus the total interest is: $${finalTotal.toFixed(2)}\n-> Damn! Shore is a lotta' chedda'. *machine bangs and sputters with old age*`);
}

prompt('intro');

while (true) {

  prompt('loanAmount');
  let loanAmount = readline.question();

  while (invalidLoanAmount(loanAmount)) {
    prompt('invalidResp');
    loanAmount = readline.question();
  }

  while (Number(loanAmount) < 1000) {
    prompt('tooLowAmount');
    loanAmount = readline.question();
  }
  loanAmount = Number(loanAmount);

  let annualPercentRate;
  //validation that if user answer is no, to loop back to apr start
  while (true) { //feed back for this area would be highly appreciated
    prompt('apr');
    annualPercentRate = readline.question();

    while (invalidAnnualPerRate(annualPercentRate)) {
      if (!annualPercentRate.includes('.') && annualPercentRate.includes(Number(annualPercentRate))) { //this logical operator was difficult
        prompt('pleaseEnterValidForm');
      } else {
        prompt('secondInvalidResp');
      }
      annualPercentRate = readline.question();
    }

    console.log(`Is ${formatAsPercent(annualPercentRate)}% correct? Yes or no, bubba.`);
    let percentCheck = readline.question();

    while (invalidContResponse(percentCheck)) {
      prompt('badContAnswer');
      percentCheck = readline.question();
    // if (percentCheck === 'yes' || 'y') break yesOrNoLoop -> didnt work
    // if (percentCheck === 'no' || 'n') continue yesOrNoLoop -> didnt work
    }

    if (percentCheck !== "yes" && percentCheck !== "y") {
      prompt('tryAgain');
      continue;
    } else {
      break;
    }
  }

  annualPercentRate = parseFloat(annualPercentRate);

  prompt('loanTerm');
  let loanTermInMonths = readline.question();

  while (incorrectTermFormat(loanTermInMonths)) {
    prompt('invaldLoanTermMssg');
    loanTermInMonths = readline.question();
  }

  loanTermInMonths = Number(loanTermInMonths);

  loanCalculatorBrains(loanAmount, annualPercentRate, loanTermInMonths);

  prompt('contQuestion');
  let contAnswer = readline.question();

  while (invalidContResponse(contAnswer)) {
    prompt('badContAnswer');
    contAnswer = readline.question();
  }

  if (contAnswer === "yes" || contAnswer === "y") {
    console.clear();
  } else {
    prompt('goodbyeMssg');
    break;
  }
}

