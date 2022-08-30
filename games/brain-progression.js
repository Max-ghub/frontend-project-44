import gameLauncher from '../src/index.js';
import getRandomNum from '../src/functions.js';

const gameDescription = 'What number is missing in the progression?';

const createProgression = () => {
  const rN = getRandomNum;
  const [progrssnFirstNum, progrssnStep, progrssnSize] = [rN(1, 49), rN(1, 9), rN(5, 10)];
  const progrssn = [progrssnFirstNum];

  for (let i = 0; i < progrssnSize; i += 1) {
    progrssn.push(progrssn[i] + progrssnStep);
  }

  return progrssn;
};

const hideProgressionNumAndGetCorrectAnswer = (progrssn) => {
  const progrssnHidden = progrssn;
  const progrssnSize = progrssn.length;
  const hideInd = getRandomNum(0, progrssnSize - 1);
  const correctAnswer = progrssn[hideInd];

  progrssnHidden[hideInd] = '..';

  return [progrssnHidden, correctAnswer];
};

const brainProgression = () => {
  const progrssn = createProgression();
  const [progrssnHidden, correctAnswer] = hideProgressionNumAndGetCorrectAnswer(progrssn);

  return [progrssnHidden.join(' '), correctAnswer.toString()];
};

export default () => gameLauncher(brainProgression, gameDescription);
