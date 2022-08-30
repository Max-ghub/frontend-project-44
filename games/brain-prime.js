import gameLauncher from '../src/index.js';
import getRandomNum from '../src/functions.js';

const gameDescription = '"yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const brainPrime = () => {
  const num = getRandomNum(2);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [num, correctAnswer];
};

export default () => gameLauncher(brainPrime, gameDescription);
