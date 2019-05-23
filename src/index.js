import readlineSync from 'readline-sync';

const numbersOfRounds = 3;

const askName = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);

  return userName;
};

const startGame = (getQuestionAnswerPair, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = askName();

  const iter = (roundCounter) => {
    if (roundCounter === numbersOfRounds) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const answerQuestionPair = getQuestionAnswerPair();

    const [question, correct] = answerQuestionPair;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correct) {
      console.log('Correct!');
      iter(roundCounter + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correct}.
        Let's try again, ${userName}`);
    }
  };

  return iter(0);
};

export default startGame;
