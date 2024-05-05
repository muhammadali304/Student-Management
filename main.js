#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright("##### Welcome to my Student Management Program #####"));
const enrollmentNumber = Math.floor(10000 + Math.random() * 9000);
let myBalance = 0;
let answers = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Student Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter student name";
        }
    },
    {
        name: "course",
        type: "list",
        message: "Select your Course:",
        choices: ["Python", "Javascript", "IELTS", "Free Lancing"]
    }
]);
// Course Fee
const courseFee = {
    "Python": 10000,
    "Javascript": 10000,
    "IELTS": 15000,
    "Free Lancing": 8000
};
console.log(`Your Course Fee is : ${courseFee[answers.course]}`);
let paymentMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select your payment method:",
        choices: ["Bank Transfer", "Easy Paisa", "Jazz Cash"]
    },
    {
        name: "account no.",
        type: "input",
        message: "Enter you account number:"
    },
    {
        name: "amount",
        type: "input",
        message: "Enter Your Amount:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter an amount";
        }
    }
]);
console.log(`${paymentMethod.amount}Rs. Successfully Paid!`);
if (courseFee > paymentMethod.amount) {
    const extraAmount = paymentMethod.amount - courseFee[answers.course];
    myBalance += extraAmount;
    console.log(chalk.blueBright("You are successfully enrolled now!"));
    console.log(`Extra amount of ${extraAmount}Rs has been added to ${answers.student}'s balance`);
}
else if (courseFee === paymentMethod.amount) {
    console.log(`${answers.student}'s fee has been fully paid.`);
}
else {
    console.log(chalk.redBright("You Paid Insufficient amount due to course"));
}
let ans = await inquirer.prompt([
    {
        name: "next",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View Status", "Exit"]
    }
]);
if (ans.next === "View Status") {
    console.log(`Student Name is : ${answers}`);
    console.log(`Student's Enrollment number is : ${enrollmentNumber}`);
    console.log(`Student's Course is : ${answers.course}`);
    console.log(`Course Fee Paid : ${paymentMethod.amount}`);
    console.log(`Student Balance is : ${myBalance += paymentMethod.amount}`);
}
else {
    console.log(chalk.yellowBright("Thank You for visiting and Enrolloing!"));
}
