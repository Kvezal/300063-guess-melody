import {initialState, currentState} from './data';

const setCurrentState = () => {
  for (const key in initialState) {
    if (initialState.hasOwnProperty(key)) {
      currentState[key] = initialState[key];
    }
  }
};

export default setCurrentState;
