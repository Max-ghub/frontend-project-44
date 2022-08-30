import gameLauncher from '../src/index.js';
import getRandomNum from '../src/functions.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (firstNum, lastNum) => {
  const maxNum = firstNum > lastNum ? firstNum : lastNum;

  let gcd = 1;
  for (let i = maxNum; i > 1; i -= 1) {
    if (firstNum % i === 0 && lastNum % i === 0) {
      gcd = i;
      return gcd;
    }
  }

  return gcd;
};

const brainGCD = () => {
  const [firstNum, lastNum] = [getRandomNum(), getRandomNum()];

  const question = `${firstNum} ${lastNum}`;
  const correctAnswer = getCorrectAnswer(firstNum, lastNum);

  return [question, correctAnswer.toString()];
};

export default () => gameLauncher(brainGCD, gameDescription);
