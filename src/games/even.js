import getRandomInt from '../utilites';
import flow from '..';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const createEvenTask = () => {
  const question = getRandomInt();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => flow(createEvenTask, descriptionGame);
