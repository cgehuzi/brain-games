import * as _ from 'lodash';
import { cons } from '@hexlet/pairs';
import makeGame, { stepsCount } from '..';

const gameDesc = 'What number is missing in the progression?';

export default (user = false) => {
  const conditions = [];

  for (let i = 1; i <= stepsCount; i += 1) {
    const progressionStart = _.random(1, 10);
    const progressionStep = _.random(1, 10);
    const progressionLength = 10;

    const progression = [progressionStart];
    for (let j = 1; j < progressionLength; j += 1) {
      const progressionLast = progression[progression.length - 1];
      const progressionNext = progressionLast + progressionStep;
      progression.push(progressionNext);
    }

    const hideIndex = _.random(0, progressionLength - 1);
    const answer = progression[hideIndex];
    progression[hideIndex] = '..';

    const question = progression.join(' ');
    const stepCondition = cons(question, String(answer));
    conditions.push(stepCondition);
  }

  return makeGame(gameDesc, conditions, user);
};
