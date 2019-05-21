import readlineSync from 'readline-sync';

const askName = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);

  return userName;
};

const startGame = (gameParams) => {
  console.log(gameParams.welcomeMessage);
  const userName = askName();

  const iter = (name, acc) => {
    const numbersOfRounds = 3;

    if (acc === numbersOfRounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const answerQuestionPair = gameParams.getQuestionAnswerPair();

    const question = answerQuestionPair[0];
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correct = `${answerQuestionPair[1]}`;

    if (answer === correct) {
      console.log('Correct!');
      iter(name, acc + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correct}.
        Let's try again, ${name}`);
    }
  };

  return iter(userName, 0);
};

export default startGame;
