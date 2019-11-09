import getRandomInt from '../utilites';
import flow from '..';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const createPrimeTask = () => {
  const question = getRandomInt(2, 99);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => flow(createPrimeTask, descriptionGame);
