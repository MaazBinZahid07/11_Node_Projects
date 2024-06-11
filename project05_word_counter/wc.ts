// COMMAND:-The user will enter a english paragraph and all that is needed is to just to implement counting characters and words without whitespaces. 

import inquirer from "inquirer"
let user_ans= await inquirer.prompt([{
    type:"input",
    name:"words",
    message:"Please enter the Sentence"
}])

let word_Count = user_ans.words.trim().split(" ");
console.log(`Your sentence has "${word_Count.length}" words.`)