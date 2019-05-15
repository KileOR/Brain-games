import { getRandomInt } from '..';

const getQuestion = () => {
  const firstNumber = getRandomInt(10);
  const secondNumber = getRandomInt(10);
  const mathSymbols = ['+', '-', '*'];

  return `${firstNumber} ${mathSymbols[getRandomInt(3) - 1]} ${secondNumber}`;
};

const getCorrectAnswer = (question) => {
  const questionArr = question.split(' ');
  const firstNumber = Number(questionArr[0]);
  const secondNumber = Number(questionArr[2]);
  const symbol = questionArr[1];
  let result;

  switch (symbol) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      result = '';
  }

  return `${result}`;
};

const getQuestionAnswerPair = () => {
  const question = getQuestion();
  const answer = getCorrectAnswer(question);

  return [question, answer];
};

const brainCalcParams = {
  welcomeMessage: `Welcome to the Brain Games!
  What is the result of the expression?`,

  getQuestion,
  getCorrectAnswer,
  getQuestionAnswerPair,
};

export default brainCalcParams;
