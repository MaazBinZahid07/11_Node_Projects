// COMMAND:-Develop a simple command line Todo app 
import inquirer from "inquirer";
let todo_list = [];
let while_condition = true;
while (while_condition === true) {
    // --------------------------------------OPTION-----------------------------------------------------
    let option = await inquirer.prompt([{
            type: "list",
            name: "user_Option",
            message: "Select an Option",
            choices: ["Add", "Remove"]
        }]);
    // ----------------------------------------ADD--------------------------------------------------------
    if (option.user_Option === "Add") {
        let ans = await inquirer.prompt([{
                type: "input",
                name: "user_ans",
                message: "Write Something to add in a task list",
            }]);
        if (ans.user_ans !== '') {
            todo_list.push(ans.user_ans);
            console.log(todo_list);
        }
        else
            (console.log("You are supposed to Add somthing in Todo list"));
    }
    // ----------------------------------------REMOVE-----------------------------------------------------
    else if (option.user_Option === "Remove") {
        let R_ans = await inquirer.prompt([{
                type: "list",
                name: "user_ans",
                message: "Remove Something from task list",
                choices: todo_list
            }]);
        let item = todo_list.indexOf(R_ans.user_ans);
        if (item >= 0) {
            todo_list.splice(item, 1);
            console.log('You has Removed:', R_ans.user_ans);
            console.log(todo_list);
        }
    }
    // --------------------------------------------------------------------------------------------------  
    let user_ans = await inquirer.prompt([{
            type: "confirm",
            name: "selection",
            message: "Do You want to continue",
            default: true
        }]);
    if (user_ans.selection === false) {
        while_condition = false;
    }
}
console.log("Thank You for using to do list");
