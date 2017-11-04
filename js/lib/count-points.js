import {GameParameters} from '../data/data';

const AnswerParameters = {
  TIME_FAST_ANSWER: 30,
  POINTS_FOR_FAST_ANSWER: 2,
  POINTS_FOR_SLOW_ANSWER: 1,
  POINTS_FOR_WRONG_ANSWER: -2
};

const countPoints = (answers, lives) => {
  if (answers.length < GameParameters.NUMBER_ANSWERS || lives <= 0) {
    return {numberOfQuickAnswers: 0, points: 0};
  }

  let numberOfQuickAnswers = 0;
  const getPoints = (sum, it) => {
    if (it.answer && it.time < AnswerParameters.TIME_FAST_ANSWER) {
      numberOfQuickAnswers++;
      return sum + AnswerParameters.POINTS_FOR_FAST_ANSWER;
    }
    if (it.answer) {
      return sum + AnswerParameters.POINTS_FOR_SLOW_ANSWER;
    }
    return sum + AnswerParameters.POINTS_FOR_WRONG_ANSWER;
  };

  const points = answers.reduce(getPoints, 0);

  return {numberOfQuickAnswers, points};
};

export default countPoints;
