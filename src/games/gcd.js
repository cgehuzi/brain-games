import * as _ from 'lodash';
import { cons } from '@hexlet/pairs';
import makeGame, { gameStepsCount } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGrandDivisor = (number1, number2) => {
  const minNumber = Math.min(number1, number2);
  let grandDivisor = minNumber;

  for (let i = minNumber - 1; i > 0; i -= 1) {
    const isDivisorOfNumber1 = number1 % i === 0;
    const isDivisorOfNumber2 = number2 % i === 0;
    if (isDivisorOfNumber1 && isDivisorOfNumber2) {
      grandDivisor = i;
      break;
    }
  }

  return grandDivisor;
};

export default (user = false) => {
  const gameConditions = [];

  for (let i = 1; i <= gameStepsCount; i += 1) {
    const firstNumber = _.random(1, 100);
    const secondNumber = _.random(1, 100);
    const grandDivisor = getGrandDivisor(firstNumber, secondNumber);

    const question = `${firstNumber} ${secondNumber}`;
    const answer = grandDivisor;
    const condition = cons(question, String(answer));

    gameConditions.push(condition);
  }

  return makeGame(gameDescription, gameConditions, user);
};
