import getRandomInt from '../utilites';
import flow from '..';

const progressionLength = 10;
const descriptionGame = 'What number is missing in the progression?';

const getProgression = (start, diff, length) => {
  let progression = [];
  for (let i = 0; i < length; i += 1) {
    progression = [...progression, start + diff * i];
  }

  return progression;
};

const createProgressionTask = () => {
  const start = getRandomInt();
  const diff = getRandomInt(1, 9);
  const missingIndexElement = getRandomInt(1, progressionLength - 1);
  const progression = getProgression(start, diff, progressionLength);
  const answer = `${progression.splice(missingIndexElement, 1, '..')}`;
  const question = progression.join(' ');

  return [question, answer];
};

export default () => flow(createProgressionTask, descriptionGame);
