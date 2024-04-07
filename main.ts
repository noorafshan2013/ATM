#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 800900;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin code",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("correct pin code!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select an option :",
      type: "list",
      choices: ["withdraw", "check balance", "fastcash"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    if (amountAns.amount < myBalance) {
      myBalance -= amountAns.amount;
      console.log("your remaining balance is" + myBalance);
    } else {
      console.log("you have insufficient balance");
    }
  } else if (operationAns.operation === "check balance") {
    console.log("your current balance is" + myBalance);
  } else if (operationAns.operation === "fastcash") {
    let cashAns = await inquirer.prompt([
      {
        name: "cash",
        message: "select amount",
        type: "list",
        choices: ["1000", "2000", "5000", "10000", "15000", "20000", "25000"],
      },
    ]);

    if (cashAns.cash < myBalance) {
      myBalance -= cashAns.cash;
      console.log("your remaining account balance is" + myBalance);
    } else {
      console.log("you have insufficient balance");
    }
  }
} else {
  console.log("invalid pin code");
}
