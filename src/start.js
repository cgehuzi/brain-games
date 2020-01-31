import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import { getUserName } from '.';
import startEven from './games/even';
import startCalc from './games/calc';
import startGCD from './games/gcd';
import startProgression from './games/progression';
import startPrime from './games/prime';

const gameDesc = 'You can play on one of this games:\n1 – brain-even\n2 – brain-calc\n3 — brain-gcd\n4 – brain-progression\n5 – brain-prime';
const games = [
  cons(1, startEven),
  cons(2, startCalc),
  cons(3, startGCD),
  cons(4, startProgression),
  cons(5, startPrime),
];

export default () => {
  const user = getUserName();

  console.log(gameDesc);

  const answer = readlineSync.question('What is the game you want play? ');
  for (let i = 0; i < games.length; i += 1) {
    const game = games[i];
    const gameNumber = car(game);
    const gameStart = cdr(game);
    if (answer === String(gameNumber)) {
      return gameStart(user);
    }
  }

  return false;
};
