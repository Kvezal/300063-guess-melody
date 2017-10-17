const countPoints = (answers, lives) => {
  const numberAnswers = 10;

  if (answers.length < numberAnswers || lives < 0) {
    return -1;
  }

  const fastTime = 30;

  return answers.reduce((sum, it) => {
    if (it.answer && it.time < fastTime) {
      return sum + 2;
    }

    if (it.answer) {
      return sum + 1;
    }

    return sum - 2;
  }, 0);
};

export default countPoints;
