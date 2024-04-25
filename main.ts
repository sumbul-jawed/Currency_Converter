#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n Welcome to sumbul currency_convert Application\n"));

// Define the list of currency and their exchange.
let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "AUD": 1.65,
    "CAD": 1.3,
    "PKR": 277.70,
}

let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: (chalk.greenBright
        ("Select the currency to convert from:")),
        choices: ["USD", "EUR", "JYP", "AUD", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: (chalk.yellow("Select the currency to convert into:")),
        choices: ["USD", "EUR", "JYP", "AUD", "CAD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the  amount to convert:"
    }
]);

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`converted Amount = ${chalk.redBright(converted_amount.toFixed(2))}`)