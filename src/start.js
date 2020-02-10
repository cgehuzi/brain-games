import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import startEven from './games/even';
import startCalc from './games/calc';
import startGcd from './games/gcd';
import startProgression from './games/progression';
import startPrime from './games/prime';

const brainGames = [
  cons(cons('1', 'brain-even'), startEven),
  cons(cons('2', 'brain-calc'), startCalc),
  cons(cons('3', 'brain-gcd'), startGcd),
  cons(cons('4', 'brain-progression'), startProgression),
  cons(cons('5', 'brain-prime'), startPrime),
];

const showGamesList = (games) => {
  for (let i = 0; i < games.length; i += 1) {
    const game = games[i];
    const gameNumber = car(car(game));
    const gameName = cdr(car(game));
    console.log(`${gameNumber} : ${gameName}`);
  }
};

const startGameOfTheList = (alias, games) => {
  for (let i = 0; i < games.length; i += 1) {
    const game = games[i];
    const gameNumber = car(car(game));
    const gameName = cdr(car(game));
    const gameFunction = cdr(game);
    if (alias === gameNumber || alias === gameName) {
      return gameFunction;
    }
  }

  return (user) => {
    console.log('Sorry, this game not found ;(.');
    console.log(`Let's try again, ${user}!`);
  };
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('You can play one of the games:');
  showGamesList(brainGames);

  const question = 'Which game do you choose? ';
  const userChoiсe = readlineSync.question(question);

  return startGameOfTheList(userChoiсe, brainGames)(userName);
};
