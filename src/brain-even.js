import readlineSync from 'readline-sync';

const gameEven = (user, count = 3) => {
  if (count === 0) {
    console.log(`Congratulations, ${user}!`);
    return true;
  }

  const randomNumber = Math.round(Math.random() * 100);
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

  if (isEven !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, ${user}!`);
    return false;
  }

  console.log('Correct!');
  return gameEven(user, count - 1);
};

export default gameEven;
