const pushCurrentAnswer = (state, answer, time) => {
  time = (new Date() - time) / 1000;
  state.answers.push({answer, time});
};

export default pushCurrentAnswer;
