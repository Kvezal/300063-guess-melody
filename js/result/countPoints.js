const countPoints = (answers, lives) => {
  const numberAnswers = 10;

  if (answers.length < numberAnswers || lives <= 0) {
    return {numberOfQuickAnswers: 0, points: 0};
  }

  const fastTime = 30;

  let numberOfQuickAnswers = 0;
  const points = answers.reduce((sum, it) => {
    if (it.answer && it.time < fastTime) {
      numberOfQuickAnswers++;
      return sum + 2;
    }

    if (it.answer) {
      return sum + 1;
    }

    return sum - 2;
  }, 0);

  return {numberOfQuickAnswers, points};
};

export default countPoints;
