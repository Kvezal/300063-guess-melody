// import {initialState, stateGame} from '../data/data';

const setStateGame = (state) => {
  const newState = {
    answers: []
  };
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      newState[key] = state[key];
    }
  }
  return newState;
};

export default setStateGame;
