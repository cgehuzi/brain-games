import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';
import startEven from './games/even.js';
import startCalc from './games/calc.js';
import startGcd from './games/gcd.js';
import startProgression from './games/progression.js';
import startPrime from './games/prime.js';

const brainGames = [
  pairs.cons(pairs.cons('1', 'even'), startEven),
  pairs.cons(pairs.cons('2', 'calc'), startCalc),
  pairs.cons(pairs.cons('3', 'gcd'), startGcd),
  pairs.cons(pairs.cons('4', 'progression'), startProgression),
  pairs.cons(pairs.cons('5', 'prime'), startPrime),
];

const showGamesList = (games) => {
  for (let i = 0; i < games.length; i += 1) {
    const game = games[i];
    const gameNumber = pairs.car(pairs.car(game));
    const gameName = pairs.cdr(pairs.car(game));
    console.log(`${gameNumber} : ${gameName}`);
  }
};

const startGameOfTheList = (alias, games) => {
  for (let i = 0; i < games.length; i += 1) {
    const game = games[i];
    const gameNumber = pairs.car(pairs.car(game));
    const gameName = pairs.cdr(pairs.car(game));
    const gameFunction = pairs.cdr(game);
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
