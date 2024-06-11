// COMMAND:- This project is not GUI based. It is a console-based game. The video here shows how to develop the game in Java. You will take the requirements of the game from the video and develop the game in TypeScript and Node.js
import inquirer from "inquirer";
// ------------------------------------------------games variable---------------------------------------------------
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHelth = 75;
let enemyAttackDamageToHero = 25;
// -----------------------------------------------player variable---------------------------------------------------
let heroHelth = 100;
let attackDamageToEnemy = 50;
let numHelthPotion = 3;
let helthPotionHealAmount = 30;
let helthPotionHealDropChance = 50;
// ----------------------------------------------while loop Condition-----------------------------------------------
let gameRunning = true;
console.log("Welcome to DeadZone!");
Game: while (gameRunning) {
    let enemyHelth = Math.floor(Math.random() * maxEnemyHelth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`#${enemy} has appeard #\n`);
    while (enemyHelth > 0) {
        console.log(`You Helth ${heroHelth}`);
        console.log(`${enemy} HElth: ${enemyHelth}`);
        let options = await inquirer.prompt({
            type: "list",
            name: "ans",
            message: "What would you like to do?",
            choices: ["1. Attack", "2. Take Helth Potion", "3. Run"]
        });
        if (options === "1. Attack ") {
            let attackDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHelth -= damageToEnemy;
            heroHelth -= damageToHero;
            console.log(`You strike the ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strikes you for ${damageToHero} damage.`);
            if (heroHelth < 1) {
                console.log("You have been taken too much damage. You are too weak to Continue. ");
            }
        }
        else if (options.ans === "2. Take Helth Potion") {
            if (numHelthPotion > 0) {
                heroHelth += helthPotionHealAmount;
                numHelthPotion--;
                console.log(`You use Heal Potion for ${helthPotionHealAmount}`);
                console.log(`You now have ${heroHelth} health`);
                console.log(`uou have ${numHelthPotion} health potion left.`);
            }
            else {
                console.log("You have no heal potion left, Defeat Enemy for a chance to health potion.");
            }
        }
        else if (options.ans === "3. Run") {
            console.log(`Yoo run away from ${enemy}`);
            continue Game;
        }
    }
    if (heroHelth < 1) {
        console.log(`You are out from battle. You are too weak`);
        break;
    }
    console.log(`${enemy} was Defeated!`);
    console.log(`You have ${heroHelth} Health.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < helthPotionHealDropChance) {
        numHelthPotion++;
        console.log(`Enemy givea you health potion`);
        console.log(`You have now ${numHelthPotion} Health potion`);
    }
    let options = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "What would you like to do?",
        choices: ["1. Continue", "2. Exit"]
    });
    if (options === "1. Attack ") {
        console.log("You are Continue on Your Advanture");
    }
    else {
        console.log("You are Successfully Exit from DeadZone");
        break;
    }
    console.log("Thank You for playing.\n");
    console.log(":--------------------:");
}
;
