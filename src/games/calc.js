import getRandomInt from '../utils';
import startGame from '..';

const welcomeMessage = 'What is the result of the expression?';
const mathSymbols = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, symbol) => {
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
  const firstNumber = getRandomInt(1, 10);
  const secondNumber = getRandomInt(1, 10);
  const selectedSymbolIndex = getRandomInt(0, mathSymbols.length - 1);
  const questionMathSymbol = mathSymbols[selectedSymbolIndex];
  const question = `${firstNumber} ${questionMathSymbol} ${secondNumber}`;
  const answer = `${calculate(firstNumber, secondNumber, questionMathSymbol)}`;

  return [question, answer];
};

export default () => startGame(getQuestionAnswerPair, welcomeMessage);
