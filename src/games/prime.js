import * as _ from 'lodash';
import { cons } from '@hexlet/pairs';
import makeGame, { gameStepsCount } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default (user = false) => {
  const gameConditions = [];

  for (let i = 1; i <= gameStepsCount; i += 1) {
    const question = _.random(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    const condition = cons(question, answer);

    gameConditions.push(condition);
  }

  return makeGame(gameDescription, gameConditions, user);
};
