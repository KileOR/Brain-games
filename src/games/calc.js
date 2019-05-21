import getRandomInt from '../utils';
import startGame from '..';

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
  const mathSymbols = ['+', '-', '*'];
  const questionMathSymbol = mathSymbols[getRandomInt(0, 3)];
  const question = `${firstNumber} ${questionMathSymbol} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, questionMathSymbol);

  return [question, answer];
};

const brainCalcParams = {
  welcomeMessage: `Welcome to the Brain Games!
  What is the result of the expression?`,
  getQuestionAnswerPair,
};

const startCalcGame = () => {
  startGame(brainCalcParams);
};

export default startCalcGame;
