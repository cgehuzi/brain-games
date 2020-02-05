import * as _ from 'lodash';
import { cons } from '@hexlet/pairs';
import makeGame, { gameStepsCount } from '..';

const gameDescription = 'What number is missing in the progression?';
const makeProgression = (start, step, length = 10) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const stepNumber = start + step * i;
    progression.push(stepNumber);
  }

  return progression;
};

export default (user = false) => {
  const gameConditions = [];

  for (let i = 1; i <= gameStepsCount; i += 1) {
    const progressionStart = _.random(1, 10);
    const progressionStep = _.random(1, 10);
    const progression = makeProgression(progressionStart, progressionStep);

    const hiddenProgressionIndex = _.random(0, progression.length - 1);
    const hiddenProgressionNumber = progression[hiddenProgressionIndex];
    progression[hiddenProgressionIndex] = '..';

    const question = progression.join(' ');
    const answer = hiddenProgressionNumber;
    const condition = cons(question, String(answer));

    gameConditions.push(condition);
  }

  return makeGame(gameDescription, gameConditions, user);
};
