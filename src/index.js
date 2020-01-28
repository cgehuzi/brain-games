import readlineSync from 'readline-sync';

const showGameRules = (rules) => {
  console.log(rules);
};

const getUserName = () => {
  const user = readlineSync.question('May I have your name? ');
  return user;
};

const sayHello = (user) => {
  console.log(`Hello, ${user}!`);
};

const requestAnswer = (question) => {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer;
};

const makeGame = (gameDesc, gameFunc, user, roundsCount = 3) => {
  console.log(gameDesc);

  for (let i = roundsCount; i > 0; i -= 1) {
    const result = gameFunc(user);
    if (result !== true) {
      const [userAnswer, correctAnswer] = result;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return false;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${user}!`);
  return true;
};

/* Прежняя реализация (через рекурсию)
=============================================================

const makeGame = (gameFunction, user, stepCount = 3) => {
  if (stepCount === 0) {
    sayCongrats(user);
    return true;
  }

  const result = gameFunction(user);

  if (result !== true) {
    const [userAnswer, correctAnswer] = result;
    sayWrong(userAnswer, correctAnswer, user);
    return false;
  }

  sayCorrect();
  return makeGame(gameFunction, user, stepCount - 1);
};

============================================================= */

export default () => {
  console.log('Welcome to the Brain Games!');
};

export {
  showGameRules, getUserName, sayHello, requestAnswer, makeGame,
};
