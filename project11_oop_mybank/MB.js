// COMMAND:- In this project you are going to follow this video which explains object oriented programming using C# and write the same code in TypeScript.
import inquirer from 'inquirer';
// Base class Person
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}
// Derived class Student
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying.`;
    }
}
// Derived class Teacher
class Teacher extends Person {
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }
}
// Function to handle CLI interaction
async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Who are you?',
            choices: ['Student', 'Teacher'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'age',
            message: 'What is your age?',
        },
        {
            type: 'input',
            name: 'extra',
            message: (answers) => answers.role === 'Student' ? 'What grade are you in?' : 'What subject do you teach?',
        },
    ]);
    const { role, name, age, extra } = answers;
    if (role === 'Student') {
        const student = new Student(name, parseInt(age), extra);
        console.log(student.describe());
        console.log(student.study());
    }
    else {
        const teacher = new Teacher(name, parseInt(age), extra);
        console.log(teacher.describe());
        console.log(teacher.teach());
    }
}
// Execute the main function
main().catch((error) => console.error(error));
