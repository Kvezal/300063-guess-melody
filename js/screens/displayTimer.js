import getTimer from './timer';
import {currentState} from './data';
import showResult from './result/result';

const displayTimer = () => {
  currentState.timer = getTimer(currentState.time);

  const DOMTimerMinutes = document.querySelector(`.timer-value-mins`);
  const DOMTimerSeconds = document.querySelector(`.timer-value-secs`);

  currentState.timer.id = window.setInterval(() => {
    currentState.timer.tick();

    DOMTimerMinutes.textContent = currentState.timer.minutes;
    DOMTimerSeconds.textContent = currentState.timer.seconds;

    if (currentState.timer.state) {
      showResult().init();
    }
  }, 1000);
};

export default displayTimer;
