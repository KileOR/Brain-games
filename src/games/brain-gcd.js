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

const brainGcdParams = {
  welcomeMessage: `Welcome to the Brain Games!
  Find the greatest common divisor of given numbers.`,

  getQuestion,
  getCorrectAnswer,
};

export default brainGcdParams;
