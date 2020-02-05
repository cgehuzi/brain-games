import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const gameStepsCount = 3;

export default (gameDescription, gameConditions, user) => {
  let userName = user;

  if (!user) {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  }

  console.log(gameDescription);

  for (let i = 0; i < gameConditions.length; i += 1) {
    const condition = gameConditions[i];
    const question = car(condition);
    const correctAnswer = cdr(condition);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};
