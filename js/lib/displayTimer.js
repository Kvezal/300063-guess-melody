import getTimer from './timer';
import {} from '../data/data';
import App from '../application';
// import getRadius from './get-radius';

const displayTimer = (state) => {
  state.timer = getTimer(state.time);

  const DOMTimerMinutes = document.querySelector(`.timer-value-mins`);
  const DOMTimerSeconds = document.querySelector(`.timer-value-secs`);
  // const timerLine = document.querySelector(`.timer-line`);

  state.timer.id = window.setInterval(() => {
    state.timer.tick();

    // const ratioOfTimes = stateGame.timer.time / stateGame.time;

    // const ratioOfCircumferences = getRadius(ratioOfTimes, timerLine.r.baseVal.value);

    // console.log(stateGame.time, stateGame.timer.time, timerLine.r.baseVal.value)

    DOMTimerMinutes.textContent = state.timer.minutes;
    DOMTimerSeconds.textContent = state.timer.seconds;
    // timerLine.style.strokeDasharray = ratioOfCircumferences.stroke;
    // timerLine.style.strokeDashoffset = ratioOfCircumferences.offset;

    if (state.timer.time <= 0) {
      App.showResult(state);
    }
  }, 1000);
  return state;
};

export default displayTimer;
