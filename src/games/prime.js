import getRandomInt from '../utils';
import startGame from '..';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAnswerPair = () => {
  const question = getRandomInt(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const brainPrimeParams = {
  welcomeMessage: `Welcome to the Brain Games!
  Answer "yes" if given number is prime. Otherwise answer "no".`,
  getQuestionAnswerPair,
};

const startPrimeGame = () => {
  startGame(brainPrimeParams);
};

export default startPrimeGame;
