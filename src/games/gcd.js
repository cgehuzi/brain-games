import * as _ from 'lodash';
import { requestAnswer } from '..';

export default () => {
  const numberOne = _.random(1, 100);
  const numberTwo = _.random(1, 100);

  const minNumber = Math.min(numberOne, numberTwo);
  let grandDivisor = minNumber;

  for (let i = minNumber - 1; i > 0; i -= 1) {
    const isDivisorOne = numberOne % i === 0;
    const isDivisorTwo = numberTwo % i === 0;
    if (isDivisorOne && isDivisorTwo) {
      grandDivisor = i;
      break;
    }
  }

  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = grandDivisor;
  const userAnswer = requestAnswer(question);

  if (correctAnswer !== Number(userAnswer)) {
    return [userAnswer, correctAnswer];
  }

  return true;
};
