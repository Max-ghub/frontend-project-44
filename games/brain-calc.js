import gameLauncher from '../src/index.js';
import getRandomNum from '../src/functions.js';

const gameDescription = 'What is the result of the expression?';

const getCorrectAnswer = (firstNum, operator, lastNum) => {
  let correctAnswer = 0;

  if (operator === '+') {
    correctAnswer = firstNum + lastNum;
  } else if (operator === '-') {
    correctAnswer = firstNum - lastNum;
  } else {
    correctAnswer = firstNum * lastNum;
  }

  return correctAnswer;
};

const brainCalc = () => {
  const [firstNum, lastNum] = [getRandomNum(), getRandomNum()];

  const listOperators = ['+', '-', '*'];
  const operator = listOperators[getRandomNum(0, 2)];

  const question = `${firstNum} ${operator} ${lastNum}`;
  const correctAnswer = getCorrectAnswer(firstNum, operator, lastNum);

  return [question, correctAnswer.toString()];
};

export default () => gameLauncher(brainCalc, gameDescription);
