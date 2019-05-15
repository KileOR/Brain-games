import { getRandomInt } from '..';

const isEven = num => num % 2 === 0;

const getQuestion = () => getRandomInt(30);

const getCorrectAnswer = num => (isEven(num) ? 'yes' : 'no');

const getQuestionAnswerPair = () => {
  const question = getQuestion();
  const answer = getCorrectAnswer(question);

  return [question, answer];
};

const brainEvenParams = {
  welcomeMessage: `Welcome to the Brain Games!
  Answer "yes" if number even otherwise answer "no".`,

  getQuestion,
  getCorrectAnswer,
  getQuestionAnswerPair,
};

export default brainEvenParams;
