#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const currency = {
    USD: 1,
    PKR: 277.8,
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
    let title = chalkAnimation.neon("currency convertor");
    await rest();
    title.stop();
}
await welcome();
async function currencyConvertor() {
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
    console.log(chalk.green(convertedAmount));
}
async function useCurrencyConvertorAgain() {
    do {
        await currencyConvertor();
        var getUserInputAgain = await inquirer.prompt({
            name: "getInputAgain",
            message: "Do you want to use currency convertor again?",
            type: "input",
        });
    } while (getUserInputAgain.getInputAgain === "y" ||
        getUserInputAgain.getInputAgain === "yes" ||
        getUserInputAgain.getInputAgain === "Y" ||
        getUserInputAgain.getInputAgain === "Yes" ||
        getUserInputAgain.getInputAgain === "YES");
}
useCurrencyConvertorAgain();
