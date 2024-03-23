#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const rest = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};
async function welcome() {
  let title = chalkAnimation.neon("let's kick of the game!");
  await rest();
  title.stop();
}
await welcome();
type ansType = {
  userGuessedNumber: number;
};

async function randomAndGuessedNoCompare() {
  let computerGeneratedRandomNumber = Math.floor(Math.random() * 5 + 1);

  let userGuessedNo: ansType = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",
      message: "Guess a number between 1 - 5",
    },
  ]);

  const { userGuessedNumber } = userGuessedNo;
  if (userGuessedNumber === computerGeneratedRandomNumber) {
    console.log(chalk.green("Congratulation!, You guessed the correct number"));
  } else {
    console.log(chalk.red("Your guess is wrong"));
  }

  //console.log(chalk.yellow(`Computer generated random number: ${computerGeneratedRandomNumber},  User guessed gumber: ${userGuessedNumber}`));
}

async function playAgain() {
  do {
    await randomAndGuessedNoCompare();
    var replay = await inquirer.prompt({
      name: "playAgain",
      type: "input",
      message: "Would you like to continue? yes or no",
    });
  } while (
    replay.playAgain == "y" ||
    replay.playAgain == "yes" ||
    replay.playAgain == "Y" ||
    replay.playAgain == "Yes"
  );
}
playAgain();
