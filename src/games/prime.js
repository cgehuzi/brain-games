import * as _ from 'lodash';
import { requestAnswer } from '..';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const number = _.random(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const userAnswer = requestAnswer(number);

  if (correctAnswer !== userAnswer) {
    return [userAnswer, correctAnswer];
  }

  return true;
};
