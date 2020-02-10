import * as _ from 'lodash';
import { cons, car, cdr } from '@hexlet/pairs';
import makeGame, { gameStepsCount } from '..';

const gameDescription = 'What is the result of the expression?';
const gameExpressions = [cons('+', (a, b) => a + b), cons('-', (a, b) => a - b), cons('*', (a, b) => a * b)];

export default (user = false) => {
  const gameConditions = [];

  for (let i = 1; i <= gameStepsCount; i += 1) {
    const firstNumber = _.random(1, 100);
    const secondNumber = _.random(1, 100);
    const randomIndex = _.random(0, gameExpressions.length - 1);
    const expression = gameExpressions[randomIndex];
    const sign = car(expression);
    const operation = cdr(expression);

    const question = `${firstNumber} ${sign} ${secondNumber}`;
    const answer = operation(firstNumber, secondNumber);
    const condition = cons(question, String(answer));

    gameConditions.push(condition);
  }

  return makeGame(gameDescription, gameConditions, user);
};
