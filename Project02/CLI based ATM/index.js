#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let userCurrentBalance = 25000;
let user6digitsPin = 1432;
const rest = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcomeMsg() {
    let welcomeMessage = chalkAnimation.rainbow("Welcome");
    await rest();
    welcomeMessage.stop();
}
await welcomeMsg();
async function startTranscation() {
    let userPin = await inquirer.prompt({
        name: "userPinCode",
        message: "Please enter your 4 digit PIN",
        type: "number",
    });
    if (userPin.userPinCode === user6digitsPin) {
        console.log(chalk.green("login successfuly"));
        let userOperation = await inquirer.prompt([
            {
                name: "operationOptions",
                message: "Please select from the options below",
                type: "list",
                choices: [
                    "Cash Withdrawal",
                    "Fast Withdrawal",
                    "Balance Inquiry",
                    "PIN Change",
                ],
            },
        ]);
        if (userOperation.operationOptions === "Cash Withdrawal") {
            let withdrawalAmount = await inquirer.prompt([
                {
                    name: "userWithdrawalAmount",
                    message: "Please enter your amount",
                    type: "number",
                },
            ]);
            if (withdrawalAmount.userWithdrawalAmount <= userCurrentBalance) {
                userCurrentBalance -= withdrawalAmount.userWithdrawalAmount;
                console.log(chalk.green("Amount withdrawn successfully"));
                console.log(`Your remaining balance is : ${userCurrentBalance}`);
            }
            else {
                console.log(chalk.red("Insufficient balance!"));
            }
        }
        else if (userOperation.operationOptions === "Fast Withdrawal") {
            let fastWithdrawalOptions = await inquirer.prompt([
                {
                    name: "userfastWithdrawalOptions",
                    message: "Select the amount you want to withdraw",
                    type: "list",
                    choices: ["10000", "15000", "20000", "24000"],
                },
            ]);
            if (fastWithdrawalOptions.userfastWithdrawalOptions == "10000") {
                if (fastWithdrawalOptions.userfastWithdrawalOptions <= userCurrentBalance) {
                    userCurrentBalance -= fastWithdrawalOptions.userfastWithdrawalOptions;
                    console.log(chalk.green("Amount withdrawn Successfully"));
                    console.log(`Your remaining balance is : ${userCurrentBalance}`);
                }
                else {
                    console.log(chalk.red("Insufficient balance!"));
                }
            }
            else if (fastWithdrawalOptions.userfastWithdrawalOptions === "15000") {
                if (fastWithdrawalOptions.userfastWithdrawalOptions <= userCurrentBalance) {
                    userCurrentBalance -= fastWithdrawalOptions.userfastWithdrawalOptions;
                    console.log(chalk.green("Amount withdrawn Successfully"));
                    console.log(`Your remaining balance is : ${userCurrentBalance}`);
                }
                else {
                    console.log(chalk.red("Insufficient balance!"));
                }
            }
            else if (fastWithdrawalOptions.userfastWithdrawalOptions === "20000") {
                if (fastWithdrawalOptions.userfastWithdrawalOptions <= userCurrentBalance) {
                    userCurrentBalance -= fastWithdrawalOptions.userfastWithdrawalOptions;
                    console.log(chalk.green("Amount withdrawn Successfully"));
                    console.log(`Your remaining balance is : ${userCurrentBalance}`);
                }
                else {
                    console.log(chalk.red("Insufficient balance!"));
                }
            }
            else if (fastWithdrawalOptions.userfastWithdrawalOptions === "24000") {
                if (fastWithdrawalOptions.userfastWithdrawalOptions <= userCurrentBalance) {
                    userCurrentBalance -= fastWithdrawalOptions.userfastWithdrawalOptions;
                    console.log(chalk.green("Amount withdrawn Successfully"));
                    console.log(`Your remaining balance is : ${userCurrentBalance}`);
                }
                else {
                    console.log(chalk.red("Insufficient balance!"));
                }
            }
        }
        else if (userOperation.operationOptions === "Balance Inquiry") {
            console.log(`Your current balance is: ${userCurrentBalance}`);
        }
        else if (userOperation.operationOptions === "PIN Change") {
            let oldPIn = await inquirer.prompt({
                name: "userOldPin",
                message: "Enter your old pin",
                type: "number",
            });
            if (oldPIn.userOldPin === user6digitsPin) {
                let newPin = await inquirer.prompt({
                    name: "userNewPin",
                    message: "Enter your new pin",
                    type: "number",
                });
                user6digitsPin = newPin.userNewPin;
                console.log(chalk.green("Your pin is changed successfully"));
            }
            else {
                console.log(chalk.red("Invalid pin code!"));
            }
        }
    }
    else {
        console.log(chalk.red("Invalid pin code!"));
    }
}
async function doAnotherTransaction() {
    do {
        await startTranscation();
        var anotherTransaction = await inquirer.prompt({
            name: "userAnotherTransaction",
            message: "Do you want to perform another transaction? yes or no",
            type: "input",
        });
    } while (anotherTransaction.userAnotherTransaction === "y" ||
        anotherTransaction.userAnotherTransaction === "yes" ||
        anotherTransaction.userAnotherTransaction === "Y" ||
        anotherTransaction.userAnotherTransaction === "Yes");
}
doAnotherTransaction();
