const initialState = {
  level: 0,
  lives: 3,
  time: 300,
  answers: []
};

const GameParameters = {
  MIN_COUNT_LIVES: 0,
  MIN_COUNT_TIME: 0,
  NUMBER_ANSWERS: 10,
  AMOUNT_MILISECONDS_IN_SECONDS: 1000,
  COUNT_OF_SECONDS_IN_MINUTE: 60,
  DECIMAL_NUMBER_SYSTEM: 10,
};

export {initialState, GameParameters};
