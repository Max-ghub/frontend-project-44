import theGame from '../src/index.js';
import getRandomNum from '../src/functions.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const num = getRandomNum();
  const trueAnswer = isEven(num) ? 'yes' : 'no';

  return [num, trueAnswer];
};

export default () => theGame(brainEven, gameDescription);
