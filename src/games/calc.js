import * as _ from 'lodash';
import { cons, car, cdr } from '@hexlet/pairs';
import makeGame, { stepsCount } from '..';

const gameDesc = 'What is the result of the expression?';
const expressions = [cons('+', (a, b) => a + b), cons('-', (a, b) => a - b), cons('*', (a, b) => a * b)];

export default (user = false) => {
  const conditions = [];

  for (let i = 1; i <= stepsCount; i += 1) {
    const numberOne = _.random(1, 100);
    const numberTwo = _.random(1, 100);
    const randomIndex = _.random(0, expressions.length - 1);
    const expressionPair = expressions[randomIndex];
    const expression = car(expressionPair);
    const expressionFunction = cdr(expressionPair);

    const question = `${numberOne} ${expression} ${numberTwo}`;
    const answer = expressionFunction(numberOne, numberTwo);
    const stepCondition = cons(question, String(answer));
    conditions.push(stepCondition);
  }

  return makeGame(gameDesc, conditions, user);
};
