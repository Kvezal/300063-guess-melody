import {stateGame} from '../data/data';

const pushCurrentAnswer = (answer, time) => {
  time = (new Date() - time) / 1000;
  stateGame.answers.push({answer, time});
};

export default pushCurrentAnswer;
