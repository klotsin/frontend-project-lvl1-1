import getRandomInt from '../utilites';
import flow from '..';

const descriptionGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const createCalcTask = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = `${calculate(num1, num2, operator)}`;

  return [question, answer];
};

export default () => flow(createCalcTask, descriptionGame);
