import getRandomNum from '../src/functions.js';
import theGame from '../src/index.js';

const operators = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';

const createOperator = () => operators[getRandomNum(0, 2)];
const createQuestion = (firstNum, operator, secondNum) => `${firstNum} ${operator} ${secondNum}`;
const getAnswer = (firstNum, operator, secondNum) => {
  let answer = 0;

  if (operator === '+') {
    answer = firstNum + secondNum;
  } else if (operator === '-') {
    answer = firstNum - secondNum;
  } else {
    answer = firstNum * secondNum;
  }

  return answer.toString();
};

const brainCalc = () => {
  const [firstNum, secondNum] = [getRandomNum(), getRandomNum()];
  const operator = createOperator();
  const question = createQuestion(firstNum, operator, secondNum);
  const trueAnswer = getAnswer(firstNum, operator, secondNum);

  return [question, trueAnswer];
};

export default () => theGame(brainCalc, gameDescription);
