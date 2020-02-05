import * as _ from 'lodash';
import { cons } from '@hexlet/pairs';
import makeGame, { gameStepsCount } from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default (user = false) => {
  const gameConditions = [];

  for (let i = 1; i <= gameStepsCount; i += 1) {
    const question = _.random(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    const condition = cons(question, answer);

    gameConditions.push(condition);
  }

  return makeGame(gameDescription, gameConditions, user);
};
