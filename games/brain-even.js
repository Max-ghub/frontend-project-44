import gameLauncher from '../src/index.js';
import getRandomNum from '../src/functions.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const num = getRandomNum();
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => gameLauncher(brainEven, gameDescription);
