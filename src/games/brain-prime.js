import { getRandomInt } from '..';

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestion = () => getRandomInt(100);

const getQuestionAnswerPair = () => {
  const question = getQuestion();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const brainPrimeParams = {
  welcomeMessage: `Welcome to the Brain Games!
  Answer "yes" if given number is prime. Otherwise answer "no".`,
  getQuestionAnswerPair,
};

export default brainPrimeParams;
