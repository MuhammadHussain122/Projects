#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let toDoList = [];
let iteration = true;
const rest = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcomeMsg() {
    let welcomeMessage = chalkAnimation.rainbow("let's create a todo list");
    await rest();
    welcomeMessage.stop();
}
await welcomeMsg();
while (iteration) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "ToDo",
            message: "What do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addMoreElement",
            message: "Do you want to add more elements in todo? ",
            default: false
        }
    ]);
    const { ToDo, addMoreElement } = answers;
    console.log(answers);
    iteration = addMoreElement;
    if (ToDo) {
        toDoList.push(ToDo);
    }
    else {
        console.log(chalk.red("Kindly enter a valid element"));
    }
}
if (toDoList.length > 0) {
    console.log(chalk.green("Here is your TOdo List:"));
    toDoList.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log(chalk.red("No To Dos found!"));
}
