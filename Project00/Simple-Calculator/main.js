#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const rest = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcomeMsg() {
    let title = chalkAnimation.rainbow("Be ready to dive into the calculation");
    await rest();
    title.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | |ex | √ | ^ | | % | |
    | |___|___|___| |___| |                  |
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
await welcomeMsg();
async function question() {
    const ans = await inquirer.prompt([
        {
            message: "Select one of the operators to perform operation",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remainder", "Power"],
        },
        { message: "Enter first number", type: "number", name: "firstNumber" },
        { message: "Enter second number", type: "number", name: "secondNumber" },
    ]);
    if (ans.operator == "Addition") {
        console.log(chalk.yellow(`${ans.firstNumber} + ${ans.secondNumber} = ${ans.firstNumber + ans.secondNumber}`));
    }
    else if (ans.operator == "Subtraction") {
        console.log(chalk.yellow(`${ans.firstNumber} - ${ans.secondNumber} = ${ans.firstNumber - ans.secondNumber}`));
    }
    else if (ans.operator == "Multiplication") {
        console.log(chalk.yellow(`${ans.firstNumber} * ${ans.secondNumber} = ${ans.firstNumber * ans.secondNumber}`));
    }
    else if (ans.operator == "Division") {
        console.log(chalk.yellow(`${ans.firstNumber} / ${ans.secondNumber} = ${ans.firstNumber / ans.secondNumber}`));
    }
    else if (ans.operator == "Remainder") {
        console.log(chalk.yellow(`${ans.firstNumber} % ${ans.secondNumber} = ${ans.firstNumber % ans.secondNumber}`));
    }
    else if (ans.operator == "Power") {
        console.log(chalk.yellow(`${ans.firstNumber} ^ ${ans.secondNumber} = ${Math.pow(ans.firstNumber, ans.secondNumber)}`));
    }
    else {
        console.log("Please select a valid operator");
    }
}
;
async function calculateAgain() {
    do {
        await question();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Would you like to continue? Press y or n:"
        });
    } while (again.restart == "y" || again.restart == "y" || again.restart == "yes" || again.restart == "Yes");
}
calculateAgain();
