import readlineSync from 'readline-sync';

const diapayWelcomeMsg = () => {
  console.log(`Welcome to the Brain Games!
              Answer "yes" if number even otherwise answer "no".`);
};

const isEven = num => num % 2 === 0;

export const askName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const askIsEvenNumber = () => {
  diapayWelcomeMsg();
  const userName = askName();

  const iter = (name, acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const askedNum = Math.floor(Math.random() * 21);
    console.log(`Question: ${askedNum}`);

    const answer = readlineSync.question('Your answer: ');
    const correct = isEven(askedNum) ? 'yes' : 'no';

    if (isEven(askedNum) && answer === correct) {
      console.log('Correct!');
      iter(name, acc + 1);
    } else if (!isEven(askedNum) && answer === correct) {
      console.log('Correct!');
      iter(name, acc + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correct}.
        Let's try again, ${name}`);
    }
  };

  return iter(userName, 0);
};
