import getRandomNum from '../src/functions.js';
import theGame from '../src/index.js';

const description = '"yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const brainPrime = () => {
  const num = getRandomNum();
  const trueAnswer = isPrime(num) ? 'yes' : 'no';

  return [num, trueAnswer];
};

export default () => theGame(brainPrime, description);
