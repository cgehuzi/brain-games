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

const sayWrong = (wrong, correct, user) => {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${user}!`);
};

const sayCorrect = () => {
  console.log('Correct!');
};

const sayCongrats = (user) => {
  console.log(`Congratulations, ${user}!`);
};

const requestAnswer = (question) => {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer;
};

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

export default () => {
  console.log('Welcome to the Brain Games!');
};

export {
  showGameRules, getUserName, sayHello, sayWrong, sayCorrect, sayCongrats, requestAnswer, makeGame,
};
