#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

interface Quiz {
    name: string
    score: number
}

let quizApp: Quiz = {
    name: ``,
    score: 0
}



async function quiz() {
    while (true) {


        let personName = await inquirer.prompt({
            name: "named",
            type: "input",
            message: "Input Your Name To Enter In Quiz App:"
        })
        quizApp.name = personName.named


        if (personName.named == false) {
            console.log(`\nPlease Input Your Name\n\n`);
        }

        else {

            async function fastAnimate(text: string, delay: number = 10) {
                for (let char of text) {
                    process.stdout.write(char);
                    await new Promise((resolve) => setTimeout(resolve, delay));
                }
            }

            await fastAnimate(chalk.white.bold(`\n\n<--------------------------Hey! ${quizApp.name.toUpperCase()} Welcome To Quiz App-------------------------->\n\n`));

            console.log(`\n`);


            let Question1 = await inquirer.prompt([
                {
                    name: "q1",
                    type: "list",
                    message: "What does GPT in ChatGPT stand for?",
                    choices: ["(a) Generative Pre-trained Transformer", "(b) Chatting Generative Prompting Tool", "(c) General Purpose Translator", "(d) Conversational Text Processor"]
                }])

            if (Question1.q1 == "(a) Generative Pre-trained Transformer") {
                quizApp.score += 20
                await fastAnimate(chalk.bgGreen.bold(`✔️  (a) Generative Pre-trained Transformer\n\n`));

            }
            else {
                await fastAnimate(chalk.bgRed.bold(`❌`, Question1.q1, `\n`))
                await fastAnimate(chalk.bgGreen.bold(`✔️  (a) Generative Pre-trained Transformer\n\n`));
            }

            let Question2 = await inquirer.prompt([
                {
                    name: "q2",
                    type: "list",
                    message: "Which is the biggest IT comapny in the world?",
                    choices: ["(a) Microsoft", "(b) Google", "(c) Nvidia", "(d) Apple"]
                },


            ])


            if (Question2.q2 == "(a) Microsoft") {
                quizApp.score += 20
                await fastAnimate(chalk.bgGreen.bold(`✔️  (a) Microsoft\n\n`));

            }
            else {
                await fastAnimate(chalk.bgRed.bold(`❌`, Question2.q2, `\n`))
                await fastAnimate(chalk.bgGreen.bold(`✔️  (a) Microsoft\n\n`));

            }



            let Question3 = await inquirer.prompt([
                {
                    name: "q3",
                    type: "list",
                    message: "What is the most popular programming language in 2024?",
                    choices: ["(a) JavaScript", "(b) C#", "(c) Python", "(d) Java"]
                },


            ])


            if (Question3.q3 == "(c) Python") {
                quizApp.score += 20
                await fastAnimate(chalk.bgGreen.bold(`✔️  (c) Python\n\n`));

            }
            else {
                await fastAnimate(chalk.bgRed.bold(`❌`, Question2.q2, `\n`))
                await fastAnimate(chalk.bgGreen.bold(`✔️  (c) Python\n\n`));

            }



            let Question4 = await inquirer.prompt([
                {
                    name: "q4",
                    type: "list",
                    message: "Who is the world's richest person in 2024?",
                    choices: ["(a) Elon Musk", "(b) Bill Gates", "(c) Jeff Bezos", "(d) Bernard Arnault"]
                },


            ])


            if (Question4.q4 == "(d) Bernard Arnault") {
                quizApp.score += 20
                await fastAnimate(chalk.bgGreen.bold(`✔️  (d) Bernard Arnault\n\n`));

            }
            else {
                await fastAnimate(chalk.bgRed.bold(`❌`, Question2.q2, `\n`))
                await fastAnimate(chalk.bgGreen.bold(`✔️  (d) Bernard Arnault\n\n`));

            }



            let Question5 = await inquirer.prompt([
                {
                    name: "q5",
                    type: "list",
                    message: "What is the process called by which new bitcoins are created?",
                    choices: ["(a) Staking", "(b) Mining", "(c) Hashing", "(d) Minting"]
                },


            ])


            if (Question5.q5 == "(b) Mining") {
                quizApp.score += 20
                await fastAnimate(chalk.bgGreen.bold(`✔️  (b) Mining\n\n`));

            }
            else {
                await fastAnimate(chalk.bgRed.bold(`❌`, Question2.q2, `\n`))
                await fastAnimate(chalk.bgGreen.bold(`✔️  (b) Mining\n\n`));

            }



            if (quizApp.score == 20) {
                await fastAnimate(`Oh! ${quizApp.name.toUpperCase()} You Scored Just ${quizApp.score}%\n\n`);
            }

            else if (quizApp.score == 40) {
                await fastAnimate(`Oh! ${quizApp.name.toUpperCase()} You Scored just ${quizApp.score}%\n\n`);
            }

            else if (quizApp.score == 60) {
                await fastAnimate(`Yayy! ${quizApp.name.toUpperCase()} You Scored ${quizApp.score}%\n\n`);
            }

            else if (quizApp.score == 80) {
                await fastAnimate(`Oh wow! ${quizApp.name.toUpperCase()} You Scored ${quizApp.score}%\n\n`);
            }

            else if (quizApp.score == 100) {
                await fastAnimate(`Congratulations! ${quizApp.name.toUpperCase()} You Scored ${quizApp.score}%\n\n`);
            }
            else {
                await fastAnimate(`Oh No! ${quizApp.name.toUpperCase()} You Scored ${quizApp.score}%, Try again\n\n`);

            }

            let again = await inquirer.prompt({
                name: "try",
                type: "confirm",
                message: "Do you want to try again?",
                default: false
            })

            if (again.try == true) {
                continue

            } else {
                await fastAnimate(chalk.white.bold(`\n\nThanks You ${quizApp.name.toUpperCase()}! For Participating. \n\n`));


                await fastAnimate(chalk.white.bold(`\n\n<--------------------------This Quiz App Is Developed By Fazilat Jahan-------------------------->\n\n`));
                break
            }

            
        }

  


    }
}
quiz()