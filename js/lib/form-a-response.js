const formAResponse = (answer, time) => {
  time = (new Date() - time) / 1000;
  return {answer, time};
};

export default formAResponse;
