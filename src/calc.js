import readlineSync from 'readline-sync';

const gameEven = (user, count = 3) => {
  if (count === 0) {
    console.log(`Congratulations, ${user}!`);
    return true;
  }
  const randomNumber = Math.round(Math.random() * 100);
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`${randomNumber}? `);

  if (isEven !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
    console.log(`Let's try again, ${user}!`);
    return false;
  }

  console.log('Correct!');
  return gameEven(user, count - 1);
};

export default gameEven;
