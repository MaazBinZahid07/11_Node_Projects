// COMMAND:- The app will show the students multiple choice questions and promt the user to reply. In the end it will show the students the result of the quiz.
import inquirer from "inquirer";
const questions = [
    {
        question: 'What is the capital of France?',
        choices: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        choices: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
        correctAnswer: 'Harper Lee'
    },
    {
        question: 'What is the smallest prime number?',
        choices: ['0', '1', '2', '3'],
        correctAnswer: '2'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choices: ['Earth', 'Venus', 'Mars', 'Jupiter'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the chemical symbol for water?',
        choices: ['H2O', 'O2', 'CO2', 'HO'],
        correctAnswer: 'H2O'
    }
];
const quiz = async () => {
    let correctAnswers = 0;
    for (const q of questions) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: q.question,
                choices: q.choices
            }
        ]);
        if (answer.userAnswer === q.correctAnswer) {
            correctAnswers++;
        }
    }
    console.log(`Quiz completed! You got ${correctAnswers} out of ${questions.length} correct.`);
};
quiz().then(() => console.log('Quiz finished'));
