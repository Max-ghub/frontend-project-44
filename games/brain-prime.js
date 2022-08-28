import getRandomNum from '../src/functions.js';
import theGame from '../src/index.js';

const description = '"yes" if given number is prime. Otherwise answer "no".';

const createQuestion = () => getRandomNum();
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const brainPrime = () => {
  const question = createQuestion();
  const trueAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, trueAnswer];
};

export default () => theGame(brainPrime, description);
