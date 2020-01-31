import * as _ from 'lodash';
import { cons } from '@hexlet/pairs';
import makeGame, { stepsCount } from '..';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const conditions = [];

  for (let i = 1; i <= stepsCount; i += 1) {
    const question = _.random(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    const stepCondition = cons(question, answer);
    conditions.push(stepCondition);
  }

  return makeGame('Answer "yes" if given number is prime. Otherwise answer "no".', conditions);
};
