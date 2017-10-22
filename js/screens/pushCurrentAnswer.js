import {stateGame} from './data';

const pushCurrentAnswer = (answer, time) => {
  time = (new Date() - time) / 1000;
  stateGame.answers.push({answer, time});
};

export default pushCurrentAnswer;
