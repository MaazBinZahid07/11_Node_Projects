// COMMAND: This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.
 
import inquirer from "inquirer"

let myBalance:number = 0;
let isContinue:boolean = true;
const pinCode:number = 9876;

const Message:string = "Welcome To ATM"
console.log(Message)

let pin_code = await inquirer.prompt({
    type:"number",
    name:"ans",
    message:"Kindly Enter you Security Pin Code"     
});
if(pin_code.ans===9876){
do {
    let ans = await inquirer.prompt({
        type:"list",
        name:"list",
        message:"Slect any option",
        choices:["Deposite","withdrawl","Fast_Cash","Balace_Inquiry"]
    }) 
    // ------------------------------------------------------------------------------------------------------------
    if(ans.list==="Deposite"){
        let ans = await inquirer.prompt({
            type:"number",
            name:"Deposite_Amount",
            message:"Please Enter Deposite Amount in Numbers"
        })
        if(ans.Deposite_Amount>0){
            myBalance=myBalance+ans.Deposite_Amount
            console.log(`Your New Balance is ${myBalance}`);
        }
        else{
            console.log('ERROR,"Please Reenter the amount"')
        }
    };
    // -------------------------------------------------------------------------------------------------------------
    if(ans.list==="withdrawl"){
        let ans = await inquirer.prompt({
            type:"number",
            name:"withdrawl_Amount",
            message:"Please Enter the withdrawl Amount in Numbers"
        })
        if(ans.withdrawl_Amount<=myBalance){
            myBalance=myBalance-ans.withdrawl_Amount
            console.log(`Your New Balance is ${myBalance}`);
        }
        else if(ans.withdrawl_Amount>myBalance){
            console.log(`You Have insufficient balance to make this paymenet,\n Your Current Balace is ${myBalance} `)
        }
        else{
            console.log('ERROR,"Please Reenter the amount"')
        }
    };
     //-------------------------------------------------------------------------------------------------------------
    if(ans.list==="Fast_Cash"){
        let ans = await inquirer.prompt({
            type:"list",
            name:"Fast_Cash_Amount",
            message:"Please Slect the withdrawl Amount from list",
            choices:["5000","10000","25000","50000"]
        })
        if(ans.Fast_Cash_Amount<myBalance){
            myBalance=myBalance-ans.Fast_Cash_Amount
            console.log(`Your New Balance is ${myBalance}`);
        }
        else if (ans.Fast_Cash_Amount>myBalance){
            console.log(`You Have insufficient balance to amke this paymenet,\nYour Current Balace is ${myBalance}`)
        }
    };
     //-------------------------------------------------------------------------------------------------------------
    if(ans.list==="Balace_Inquiry"){
            console.log(`Your Current Balance is ${myBalance}`);
    };
    // -------------------------------------------------------------------------------------------------------------
    let while_ans = await inquirer.prompt({
        type:"confirm",
        name:"condition",
        message:"Do You Want to continue",
    }) 
    if (while_ans.condition===false){
        isContinue = false
    }
}while(isContinue);
}
else{
    console.log("Invalid Pin Code")
};