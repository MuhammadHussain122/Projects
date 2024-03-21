#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let title = chalkAnimation.rainbow("Let's start calculation");
    await sleep();
    title.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcome();
async function question() {
    const answer = await inquirer.prompt([
        {
            message: "Select of the operators to perform operation",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        { message: "Enter first number", type: "number", name: "firstNumber" },
        { message: "Enter second number", type: "number", name: "secondNumber" },
    ]);
    if (answer.operator == "Addition") {
        console.log(chalk.yellow(`${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`));
    }
    else if (answer.operator == "Subtraction") {
        console.log(chalk.yellow(`${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`));
    }
    else if (answer.operator == "Multiplication") {
        console.log(chalk.yellow(`${answer.firstNumber} * ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`));
    }
    else if (answer.operator == "Division") {
        console.log(chalk.yellow(`${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`));
    }
    else {
        console.log("Please select valid operator");
    }
}
;
async function startAgain() {
    do {
        await question();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Would you like to continue? Press y or n:"
        });
    } while (again.restart == "y" || again.restart == "y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
