#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const currency: any = {
  USD: 1,
  PKR: 277.90,
  EURO: 0.92,
  YUAN: 7.23,
  INR: 83.2,
  YER: 249.97,
  SAR: 3.75,
  IQD: 1309.0,
  IRR: 42000.0,
};
const rest = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};
async function welcome() {
  let title = chalkAnimation.neon("currency converter");
  await rest();
  title.stop();
}
await welcome();
async function currencyConverter() {
  let userInputs = await inquirer.prompt([
    {
      name: "currencyFrom",
      message: "from:",
      type: "list",
      choices: [
        "USD",
        "PKR",
        "EURO",
        "YUAN",
        "INR",
        "YER",
        "SAR",
        "IQD",
        "IRR",
      ],
    },
    {
      name: "currencyTo",
      message: "to:",
      type: "list",
      choices: [
        "USD",
        "PKR",
        "EURO",
        "YUAN",
        "INR",
        "YER",
        "SAR",
        "IQD",
        "IRR",
      ],
    },
    {
      name: "amount",
      message: "Enter your amount:",
      type: "number",
    },
  ]);
  let fromCurrency = currency[userInputs.currencyFrom];
  let toCurrency = currency[userInputs.currencyTo];
  let amount = userInputs.amount;
  let baseAmount = amount / fromCurrency;
  let convertedAmount = baseAmount * toCurrency;
  console.log(chalk.green(convertedAmount.toFixed(2)));
}

async function useCurrencyConverterAgain() {
  do {
    await currencyConverter();
    var getUserInputAgain = await inquirer.prompt({
      name: "getInputAgain",
      message: "Do you want to use currency converter again?",
      type: "input",
    });
  } while (
    getUserInputAgain.getInputAgain === "y" ||
    getUserInputAgain.getInputAgain === "yes" ||
    getUserInputAgain.getInputAgain === "Y" ||
    getUserInputAgain.getInputAgain === "Yes" ||
    getUserInputAgain.getInputAgain === "YES"
  );
}
useCurrencyConverterAgain();
