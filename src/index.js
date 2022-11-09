import readlineSync from 'readline-sync';

const gameCycles = 3;

const gameLauncher = (brainGameType, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${gameDescription}`);

  for (let i = 0; i < gameCycles; i += 1) {
    const [question, correctAnswer] = brainGameType();
    console.log(`Question: ${question}`);
    // console.log(correctAnswer);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameLauncher;
