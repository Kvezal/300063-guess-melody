import {currentState} from './data';

const getTimer = (time) => {
  currentState.timer = {
    state: false,

    tick() {
      --currentState.time;

      let minutes = Math.trunc(currentState.time / 60);
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      let seconds = currentState.time % 60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      currentState.timer.minutes = minutes;
      currentState.timer.seconds = seconds;

      if (currentState.time <= 0) {
        window.clearInterval(currentState.timer.id);
        currentState.timer.state = true;
      }
    }
  };

  currentState.timer.id = window.setInterval(currentState.timer.tick, 1000);
};

export default getTimer;
