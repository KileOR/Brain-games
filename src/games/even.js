import getRandomInt from '../utils';
import startGame from '..';

const isEven = num => num % 2 === 0;

const getQuestionAnswerPair = () => {
  const question = getRandomInt(1, 30);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const brainEvenParams = {
  welcomeMessage: `Welcome to the Brain Games!
  Answer "yes" if number even otherwise answer "no".`,
  getQuestionAnswerPair,
};

const startEvenGame = () => {
  startGame(brainEvenParams);
};

export default startEvenGame;
