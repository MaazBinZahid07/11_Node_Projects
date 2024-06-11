import inquirer from "inquirer";
class Student {
    ID;
    name;
    coursesEnrolled;
    feeAmount;
    constructor(ID, name, coursesEnrolled, feeAmount) {
        this.ID = ID;
        this.name = name;
        this.coursesEnrolled = coursesEnrolled;
        this.feeAmount = feeAmount;
    }
}
let baseID = 10000;
let studentID = "";
let continueEnrollment = true;
let students = [];
do {
    let action = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "Please Select an Option:\n",
        choices: ["Enroll a Student", "Show a student", "Remove a student"]
    });
    // ------------------------------------------"Enroll a Student"-----------------------------------------------------
    if (action.ans === "Enroll a Student") {
        let studentName = await inquirer.prompt({
            type: "input",
            name: "ans",
            message: "Please enter your name"
        });
        let trimStudentName = (studentName.ans).trim().toLowerCase();
        let student = students.find(item => item.name === trimStudentName);
        if (!student) {
            if (trimStudentName !== "") {
                baseID++;
                studentID = "STID" + baseID;
                console.log("\n\tYour Account Has Been Created\n");
                console.log(`Welcome, ${trimStudentName}!`);
                student = new Student(studentID, trimStudentName, [], 0);
                students.push(student);
            }
            else {
                console.log("Invalid Name");
            }
        }
        else {
            console.log("This name already exists. You can enroll in more courses.");
        }
        let moreCourses = true;
        while (moreCourses) {
            let course = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "Please Select a Course",
                choices: ["IT", "Mechanical", "Electrical", "English", "Cooking"]
            });
            let courseFee = 0;
            switch (course.ans) {
                case "IT":
                case "Mechanical":
                case "Electrical":
                    courseFee = 5000;
                    break;
                case "English":
                    courseFee = 3000;
                    break;
                case "Cooking":
                    courseFee = 2000;
                    break;
            }
            if (student && !student.coursesEnrolled.includes(course.ans)) {
                student.coursesEnrolled.push(course.ans);
                student.feeAmount += courseFee;
                console.log(`You have enrolled in the ${course.ans} course.`);
            }
            else if (student) {
                console.log(`You are already enrolled in the ${course.ans} course.`);
            }
            let courseConfirm = await inquirer.prompt({
                type: "confirm",
                name: "ans",
                message: "Do you want to enroll in another course?"
            });
            moreCourses = courseConfirm.ans;
        }
    }
    // ----------------------------------------"Show a Student"-------------------------------------------------         
    else if (action.ans === "Show a student") {
        if (students.length !== 0) {
            let studentNameCheck = students.map(item => item.name);
            let selectedStudent = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "Please select the name",
                choices: studentNameCheck
            });
            let foundStudent = students.find(student => student.name === selectedStudent.ans);
            if (foundStudent) {
                console.log("Student Information:");
                console.log(foundStudent);
                console.log("\n");
            }
            else {
                console.log("Student not found.");
            }
        }
        else {
            console.log("Record is empty");
        }
    }
    // ----------------------------------------"Remove a Student"-------------------------------------------------         
    else if (action.ans === "Remove a student") {
        if (students.length !== 0) {
            let studentNameCheck = students.map(item => item.name);
            let selectedStudent = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "Please select the name",
                choices: studentNameCheck
            });
            students = students.filter(student => student.name !== selectedStudent.ans);
            console.log(`Student ${selectedStudent.ans} has been removed.`);
        }
        else {
            console.log("Record is empty");
        }
    }
    let userConfirm = await inquirer.prompt({
        type: "confirm",
        name: "ans",
        message: "Do you want to continue?"
    });
    continueEnrollment = userConfirm.ans;
} while (continueEnrollment);
