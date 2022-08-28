import getRandomNum from '../src/functions.js';
import theGame from '../src/index.js';

const description = 'What number is missing in the progression?';

const createProgression = () => {
  const rN = getRandomNum;
  const [progressionFirstElem, progressionStep, progressionSize] = [rN(1, 49), rN(1, 9), rN(5, 10)];
  const progression = [progressionFirstElem];

  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  return progression;
};

const createQuestionAndGetTrueAnswer = (progression) => {
  const question = progression;
  const progressionSize = progression.length;
  const hideInd = getRandomNum(0, progressionSize - 1);
  const trueAnswer = progression[hideInd];

  question[hideInd] = '..';

  return [question.join(' '), trueAnswer.toString()];
};

const brainProgression = () => {
  const progression = createProgression();
  const [question, trueAnswer] = createQuestionAndGetTrueAnswer(progression);

  return [question, trueAnswer];
};

export default () => theGame(brainProgression, description);
