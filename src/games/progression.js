import getRandomInt from '../utils';
import startGame from '..';

const welcomeMessage = 'What number is missing in the progression?';
const numbersInProgression = 10;

const generateProgression = (start, step) => {
  const progression = [];

  for (let i = 0; i < numbersInProgression; i += 1) {
    progression[i] = start + step * i;
  }

  return progression;
};

const getQuestionAnswerPair = () => {
  const step = getRandomInt(1, 5);
  const firstNumber = getRandomInt(0, 10);
  const progression = generateProgression(firstNumber, step);
  const hiddenElementIndex = getRandomInt(0, progression.length);
  const answer = `${progression[hiddenElementIndex]}`;

  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => startGame(getQuestionAnswerPair, welcomeMessage);
