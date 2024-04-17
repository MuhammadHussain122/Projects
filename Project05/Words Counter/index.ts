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
    let title = chalkAnimation.neon("Words Counter");
    await rest();
    title.stop();
}
await welcome();
async function countWords() {
const inputSentence = await inquirer.prompt([
  {
    name: "sentence",
    message: "Enter your sentence to count words",
    type: "input",
  },
]);

const words = inputSentence.sentence.trim().split(" ");
console.log(words);
console.log(chalk.green(`Your sentence word count is ${words.length}`));
}

async function countWordsAgain() {
 do{
    await countWords();
    var inputSentenceAgain = await inquirer.prompt(
        {
            name : "sentence",
            message: "Do you want to enter another sentence to count words? y/n",
            type: "input",
        }
    );
 }
 while(inputSentenceAgain.sentence=== "y" || inputSentenceAgain.sentence === "yes" || inputSentenceAgain.sentence=== "Y" || inputSentenceAgain.sentence === "Yes"|| inputSentenceAgain.sentence==="YES");
}
countWordsAgain();