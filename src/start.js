import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import { getUserName } from '.';
import startEven from './games/even';
import startCalc from './games/calc';
import startGCD from './games/gcd';
import startProgression from './games/progression';
import startPrime from './games/prime';

const games = [
  cons('brain-even', startEven),
  cons('brain-calc', startCalc),
  cons('brain-gcd', startGCD),
  cons('brain-progression', startProgression),
  cons('brain-prime', startPrime),
];

const makeGameNav = (gamesList) => {
  const result = ['You can play on one of this games:\n'];
  for (let i = 0; i < gamesList.length; i += 1) {
    const game = gamesList[i];
    const [gameNumber, gameName] = [i + 1, car(game)];
    result.push(`${gameNumber} – ${gameName}\n`);
  }
  result.push('What is the game you want play? ');
  return result.join('');
};

export default () => {
  const user = getUserName();
  const question = makeGameNav(games);
  const answer = readlineSync.question(question);

  for (let i = 0; i < games.length; i += 1) {
    const game = games[i];
    const [gameNumber, gameName, gameFunction] = [i + 1, car(game), cdr(game)];
    if (answer === String(gameNumber) || answer === gameName) {
      return gameFunction(user);
    }
  }

  return false;
};
