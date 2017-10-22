import getTimer from './timer';
import {stateGame} from './data';
import showResult from './result/result';

const displayTimer = () => {
  stateGame.timer = getTimer(stateGame.time);

  const DOMTimerMinutes = document.querySelector(`.timer-value-mins`);
  const DOMTimerSeconds = document.querySelector(`.timer-value-secs`);

  stateGame.timer.id = window.setInterval(() => {
    stateGame.timer.tick();

    DOMTimerMinutes.textContent = stateGame.timer.minutes;
    DOMTimerSeconds.textContent = stateGame.timer.seconds;

    if (stateGame.timer.state) {
      showResult().init();
    }
  }, 1000);
};

export default displayTimer;
