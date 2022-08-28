import getRandomNum from '../src/functions.js';
import theGame from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const createQuestion = (firstNum, secondNum) => `${firstNum} ${secondNum}`;
const getAnswer = (firstNum, secondNum) => {
  const countCycles = firstNum > secondNum ? firstNum : secondNum;
  let gcd = 1;
  for (let i = countCycles; i > 1; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      gcd = i;
      return gcd.toString();
    }
  }

  return gcd.toString();
};

const brainGCD = () => {
  const [firstNum, secondNum] = [getRandomNum(), getRandomNum()];
  const question = createQuestion(firstNum, secondNum);
  const trueAnswer = getAnswer(firstNum, secondNum);

  return [question, trueAnswer];
};

export default () => theGame(brainGCD, description);
