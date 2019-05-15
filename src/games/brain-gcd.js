import { getRandomInt } from '..';

const findGcd = (num1, num2) => {
  if (!num2) {
    return `${num1}`;
  }

  return findGcd(num2, num1 % num2);
};

const getQuestion = () => {
  const firstNumber = getRandomInt(100);
  const secondNumber = getRandomInt(100);

  return `${firstNumber} ${secondNumber}`;
};

const getCorrectAnswer = (question) => {
  const numbers = question.split(' ');
  const firstNumber = numbers[0];
  const secondNumber = numbers[1];

  return findGcd(firstNumber, secondNumber);
};

const getQuestionAnswerPair = () => {
  const question = getQuestion();
  const answer = getCorrectAnswer(question);

  return [question, answer];
};

const brainGcdParams = {
  welcomeMessage: `Welcome to the Brain Games!
  Find the greatest common divisor of given numbers.`,
  getQuestionAnswerPair,
};

export default brainGcdParams;
