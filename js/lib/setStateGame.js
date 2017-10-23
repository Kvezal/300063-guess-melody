import {initialState, stateGame} from '../data/data';

const setStateGame = () => {
  for (const key in initialState) {
    if (initialState.hasOwnProperty(key)) {
      stateGame[key] = initialState[key];
    }
  }
};

export default setStateGame;
