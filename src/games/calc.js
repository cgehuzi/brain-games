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

const gameCalc = () => {
  const expressions = ['+', '-', '*'];
  const numberOne = _.random(100);
  const numberTwo = _.random(50);
  const randomIndex = _.random(0, expressions.length - 1);
  const expression = expressions[randomIndex];
  const expressionFunction = getExpressionFunction(expression);
  const question = `${numberOne} ${expression} ${numberTwo}`;

  const correctAnswer = expressionFunction(numberOne, numberTwo);
  const userAnswer = Number(requestAnswer(question));

  if (correctAnswer !== userAnswer) {
    return [userAnswer, correctAnswer];
  }

  return true;
};

export default gameCalc;
