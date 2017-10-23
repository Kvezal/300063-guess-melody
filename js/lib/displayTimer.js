import getTimer from './timer';
import {stateGame} from '../data/data';
import showResult from '../screens/result/result';
// import getRadius from './get-radius';

const displayTimer = () => {
  stateGame.timer = getTimer(stateGame.time);

  const DOMTimerMinutes = document.querySelector(`.timer-value-mins`);
  const DOMTimerSeconds = document.querySelector(`.timer-value-secs`);
  // const timerLine = document.querySelector(`.timer-line`);

  stateGame.timer.id = window.setInterval(() => {
    stateGame.timer.tick();

    // const ratioOfTimes = stateGame.timer.time / stateGame.time;

    // const ratioOfCircumferences = getRadius(ratioOfTimes, timerLine.r.baseVal.value);

    // console.log(stateGame.time, stateGame.timer.time, timerLine.r.baseVal.value)

    DOMTimerMinutes.textContent = stateGame.timer.minutes;
    DOMTimerSeconds.textContent = stateGame.timer.seconds;
    // timerLine.style.strokeDasharray = ratioOfCircumferences.stroke;
    // timerLine.style.strokeDashoffset = ratioOfCircumferences.offset;

    if (stateGame.timer.state) {
      showResult().init();
    }
  }, 1000);
};

export default displayTimer;
