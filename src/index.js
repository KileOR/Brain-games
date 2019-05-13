import readlineSync from 'readline-sync';

export const getRandomInt = range => Math.floor(Math.random() * range + 1);

const askName = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);

  return userName;
};

const startGame = (gameParams) => {
  console.log(gameParams.welcomeMessage);
  const userName = askName();

  const iter = (name, acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const question = gameParams.getQuestion();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correct = gameParams.getCorrectAnswer(question);

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
