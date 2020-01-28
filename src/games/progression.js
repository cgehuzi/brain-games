import * as _ from 'lodash';
import { requestAnswer } from '..';

export default () => {
  const progressionStart = _.random(10);
  const progressionStep = _.random(10);
  const progressionLength = 10;

  const progression = [progressionStart];
  for (let i = 1; i < progressionLength; i += 1) {
    const progressionLast = progression[progression.length - 1];
    const progressionNext = progressionLast + progressionStep;
    progression.push(progressionNext);
  }

  const question = progression.join(' ');
  const userAnswer = requestAnswer(question);

  return userAnswer;
};
