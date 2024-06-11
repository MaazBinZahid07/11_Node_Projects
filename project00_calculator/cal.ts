// COMMAND :Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.

import inquirer from "inquirer"
let Ans= await inquirer.prompt([{
    type: "Number",
    name: "First_Number",
    message:"Enter Your First Number: "
},
{
    type: "Number",
    name: "Second_Number",
    message:"Enter Your Second Number: " 
},
{
    type: "list",
    name: "Operator",
    message:"Please select Operation type: ",
    choices:["Addition", "Subtraction", "Multiplication", "Devision"] 
}]);
if(Ans.Operator==="Addition"){
    console.log(`Your Required Answer is ${Ans.First_Number + Ans.Second_Number}`);
}
else if(Ans.Operator==="Subtraction"){
    console.log(`Your Required Answer is ${Ans.First_Number - Ans.Second_Number}`);
}
else if(Ans.Operator==="Multiplication"){
    console.log(`Your Required Answer is ${Ans.First_Number*Ans.Second_Number}`);
}
else if(Ans.Operator==="Devision"){
    console.log(`Your Required Answer is ${Ans.First_Number/Ans.Second_Number}`);
}
else{
    console.log("Error 404")
}

