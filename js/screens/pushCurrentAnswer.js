import {currentAnswers} from './data';

const pushCurrentAnswer = (answer, time) => {
  time = (new Date() - time) / 1000;
  currentAnswers.push({answer, time});
  console.log(currentAnswers);
};

export default pushCurrentAnswer;
