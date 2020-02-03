import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const stepsCount = 3;

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

export default (gameDesc, gameConditions, userName = false) => {
  const user = !userName ? getUserName() : userName;

  console.log(gameDesc);

  for (let i = 0; i < gameConditions.length; i += 1) {
    const condition = gameConditions[i];
    const question = car(condition);
    const answer = cdr(condition);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${user}!`);
      return false;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${user}!`);
  return true;
};
