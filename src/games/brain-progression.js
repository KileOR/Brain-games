import { getRandomInt } from '..';

const generateProgression = () => {
  const step = getRandomInt(5);
  const firstNumber = getRandomInt(10);
  const progression = [];

  progression.push(firstNumber);

  for (let i = 1; i < 10; i += 1) {
    const nextNumber = progression[i - 1] + step;
    progression.push(nextNumber);
  }

  return progression;
};

const getQuestionAnswerPair = () => {
  const progression = generateProgression();
  const randomIndex = getRandomInt(progression.length) - 1;
  const answer = progression[randomIndex];

  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const brainProgressionParams = {
  welcomeMessage: `Welcome to the Brain Games!
  What number is missing in the progression?`,
  getQuestionAnswerPair,
};

export default brainProgressionParams;
