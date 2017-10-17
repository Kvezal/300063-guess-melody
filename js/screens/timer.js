import {currentState} from './data';

const getTimer = () => {
  currentState.timer = {
    state: false,
    minutes: 0,
    seconds: 0,
    id: 0,

    tick: () => {
      --currentState.time;

      currentState.timer.minutes = Math.trunc(currentState.time / 60);
      currentState.timer.seconds = currentState.time % 60;

      if (currentState.time <= 0) {
        window.clearInterval(currentState.timer.id);
        currentState.timer.state = true;
      }
    }
  };

  currentState.timer.id = window.setInterval(currentState.timer.tick, 1000);
};

export default getTimer;
