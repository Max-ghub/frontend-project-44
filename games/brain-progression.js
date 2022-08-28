import getRandomNum from '../src/functions.js';
import theGame from '../src/index.js';

const description = 'What number is missing in the progression?';

const brainProgression = () => {
  const firstElem = getRandomNum(1, 49);
  const progressionStep = getRandomNum(1, 9);
  const progressionSize = getRandomNum(5, 10);
  const progressionHideInd = getRandomNum(0, progressionSize - 1);

  const progression = [firstElem];
  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  const trueAnswer = progression[progressionHideInd];
  progression[progressionHideInd] = '..';

  return [progression, trueAnswer.toString()];
};

export default () => theGame(brainProgression, description);
