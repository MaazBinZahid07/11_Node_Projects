// COMMAND:- In this project, you will build a countdown timer using the date module.

import inquirer from "inquirer"


const countdownTimer = async () => {
    // Prompt the user for the target date and time
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'date',
            message: 'Enter the target date (YYYY-MM-DD):',
            validate: (input: string) => {
                const date = new Date(input);
                return !isNaN(date.getTime()) || 'Please enter a valid date (YYYY-MM-DD)';
            }
        },
        {
            type: 'input',
            name: 'time',
            message: 'Enter the target time (HH:MM:SS):',
            validate: (input: string) => {
                const [hours, minutes, seconds] = input.split(':').map(Number);
                return (
                    hours >= 0 && hours < 24 &&
                    minutes >= 0 && minutes < 60 &&
                    seconds >= 0 && seconds < 60
                ) || 'Please enter a valid time (HH:MM:SS)';
            }
        }
    ]);

    // Parse the input date and time
    const targetDate = new Date(`${answers.date}T${answers.time}`);

    // Function to update and display the countdown timer
    const updateTimer = () => {
        const now = new Date();
        const timeDifference = targetDate.getTime() - now.getTime();

        if (timeDifference <= 0) {
            console.log('Countdown complete!');
            clearInterval(timerInterval);
            return;
        }

        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        console.log(`Time remaining: ${hours}h ${minutes}m ${seconds}s`);
    };

    // Start the countdown timer
    const timerInterval = setInterval(updateTimer, 1000);
};

countdownTimer().then(() => console.log('Countdown timer started.'));
