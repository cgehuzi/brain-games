import * as _ from 'lodash';
import { cons } from '@hexlet/pairs';
import makeGame, { stepsCount } from '..';

export default () => {
  const conditions = [];

  for (let i = 1; i <= stepsCount; i += 1) {
    const numberOne = _.random(1, 100);
    const numberTwo = _.random(1, 100);

    const minNumber = Math.min(numberOne, numberTwo);
    let grandDivisor = minNumber;

    for (let j = minNumber - 1; j > 0; j -= 1) {
      const isDivisorOne = numberOne % j === 0;
      const isDivisorTwo = numberTwo % j === 0;
      if (isDivisorOne && isDivisorTwo) {
        grandDivisor = j;
        break;
      }
    }

    const question = `${numberOne} ${numberTwo}`;
    const answer = grandDivisor;
    const stepCondition = cons(question, answer);
    conditions.push(stepCondition);
  }

  return makeGame('Find the greatest common divisor of given numbers.', conditions);
};
