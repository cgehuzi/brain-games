import _ from 'lodash';
import pairs from '@hexlet/pairs';
import makeGame, { gameStepsCount } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const gameExpressions = [
  pairs.cons('+', (a, b) => a + b),
  pairs.cons('-', (a, b) => a - b),
  pairs.cons('*', (a, b) => a * b),
];

export default (user = false) => {
  const gameConditions = [];

  for (let i = 1; i <= gameStepsCount; i += 1) {
    const firstNumber = _.random(1, 100);
    const secondNumber = _.random(1, 100);
    const randomIndex = _.random(0, gameExpressions.length - 1);
    const expression = gameExpressions[randomIndex];
    const sign = pairs.car(expression);
    const operation = pairs.cdr(expression);

    const question = `${firstNumber} ${sign} ${secondNumber}`;
    const answer = operation(firstNumber, secondNumber);
    const condition = pairs.cons(question, String(answer));

    gameConditions.push(condition);
  }

  return makeGame(gameDescription, gameConditions, user);
};
