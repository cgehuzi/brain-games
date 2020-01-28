import * as _ from 'lodash';
import { requestAnswer } from '..';

const getExpressionFunction = (expression) => {
  switch (expression) {
    case '+':
      return (a, b) => a + b;
    case '-':
      return (a, b) => a - b;
    case '*':
      return (a, b) => a * b;
    default:
      return (a, b) => a + b;
  }
};

export default () => {
  const expressions = ['+', '-', '*'];
  const numberOne = _.random(1, 100);
  const numberTwo = _.random(1, 100);
  const randomIndex = _.random(0, expressions.length - 1);
  const expression = expressions[randomIndex];
  const expressionFunction = getExpressionFunction(expression);

  const question = `${numberOne} ${expression} ${numberTwo}`;
  const correctAnswer = expressionFunction(numberOne, numberTwo);
  const userAnswer = requestAnswer(question);

  if (correctAnswer !== Number(userAnswer)) {
    return [userAnswer, correctAnswer];
  }

  return true;
};
