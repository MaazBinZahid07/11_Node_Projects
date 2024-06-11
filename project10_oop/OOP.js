// COMMAND:- In this project you are going to follow this video which explains object oriented programming using C# and write the same code in TypeScript.
// Importing inquirer for command-line interaction
import inquirer from 'inquirer';
// Base class definition
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
// Derived class Dog extending Animal
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
// Derived class Cat extending Animal
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}
// DogFactory implementing AnimalFactory interface
class DogFactory {
    createAnimal(name) {
        return new Dog(name);
    }
}
// CatFactory implementing AnimalFactory interface
class CatFactory {
    createAnimal(name) {
        return new Cat(name);
    }
}
// Function to prompt user for input and create the appropriate animal
async function createAnimal() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'animalType',
            message: 'Which type of animal would you like to create?',
            choices: ['Dog', 'Cat'],
        },
        {
            type: 'input',
            name: 'animalName',
            message: 'What is the name of the animal?',
        },
    ]);
    const { animalType, animalName } = answers;
    let factory;
    if (animalType === 'Dog') {
        factory = new DogFactory();
    }
    else {
        factory = new CatFactory();
    }
    const animal = factory.createAnimal(animalName);
    animal.makeSound();
}
// Execute the createAnimal function
createAnimal();
