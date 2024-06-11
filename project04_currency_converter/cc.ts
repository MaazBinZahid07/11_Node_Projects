// COMMAND :-The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one currency and set the currency they want to check the monetary value of.While developing the app, the beginners can master variables, algorithms, loops, if statements, and other TypeScript concepts.

import inquirer from "inquirer"

let c_value: {[key: string]: number} = {
    USD: 0.0036,
    AED: 0.013,
    EURO:0.0033,
    Pound:0.0028,
    PKR:1
}

let ans = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "Select the Currency you are currently In",
    choices:["USD","AED","EURO","Pound","PKR"]
},{
    type: "list",
    name: "to",
    message: "Select the Currency you want to convert In",
    choices:["USD","AED","EURO","Pound","PKR"]
},{
    type: "number",
    name: "amount",
    message: "Please Enter the amount to you want to convert",
}]);

let n_value = (c_value[ans.to]/c_value[ans.from])*ans.amount;
console.log(`The amount you enter is "${n_value}" in your selected currency`)