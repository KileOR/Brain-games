import getRandomInt from '../utils';
import startGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getQuestionAnswerPair = () => {
  const question = getRandomInt(1, 30);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startGame(getQuestionAnswerPair, description);
