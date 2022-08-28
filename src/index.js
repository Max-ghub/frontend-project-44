// @ts-check
import readlineSync from 'readline-sync';

const gameCycles = 3;

export default (brainGame, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n${description}`);

  for (let i = 0; i < gameCycles; i += 1) {
    const [question, trueAnswer] = brainGame();
    console.log(`Question: ${question}`);
    console.log(trueAnswer);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== trueAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
