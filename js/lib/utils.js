import {initialState, GameParameters} from '../data/data';
import countPoints from '../lib/count-points';

const appDisplay = document.querySelector(`.main`);

const getStrokeDasharray = (radius) => {
  return Math.floor(2 * Math.PI * radius);
};

const getStrokeDashoffset = (ratioOfTimes, lengthCircle) => {
  return (1 - ratioOfTimes) * lengthCircle;
};

class Utils {
  static getElementFromTemplate(markup) {
    const containerForNewHTMLElement = document.createElement(`template`);
    containerForNewHTMLElement.innerHTML = markup;
    return containerForNewHTMLElement.content;
  }

  static clearDisplay(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  static displayElement(element, parent) {
    this.clearDisplay(parent);
    parent.appendChild(element);
  }

  static displayScreen(screen) {
    this.displayElement(screen, appDisplay);
  }

  static playSong(element) {
    element.classList.add(`player-control--pause`);
    element.classList.remove(`player-control--play`);
    element.parentElement.querySelector(`audio`).play();
  }

  static stopSong(element) {
    element.classList.remove(`player-control--pause`);
    element.classList.add(`player-control--play`);
    element.parentElement.querySelector(`audio`).pause();
  }

  static getCurrentResult(state) {
    const counterPoints = countPoints(state.answers, state.lives);
    return {
      points: counterPoints.points,
      numberOfQuickAnswers: counterPoints.numberOfQuickAnswers,
      lives: state.lives,
      time: state.time,
      timeLeft: initialState.time - state.time,
      id: +new Date()
    };
  }

  static changeTimer(time, timerValue, timerLine) {
    const timerMinutes = timerValue.querySelector(`.timer-value-mins`);
    const timerSeconds = timerValue.querySelector(`.timer-value-secs`);

    let minutes = Math.trunc(time / GameParameters.COUNT_OF_SECONDS_IN_MINUTE);
    timerMinutes.textContent = (minutes < GameParameters.DECIMAL_NUMBER_SYSTEM) ?
      `0${minutes}` : minutes;

    let seconds = Math.trunc(time % GameParameters.COUNT_OF_SECONDS_IN_MINUTE);
    timerSeconds.textContent = (seconds < GameParameters.DECIMAL_NUMBER_SYSTEM) ?
      `0${seconds}` : seconds;

    const ratioOfTimes = time / initialState.time;
    const radius = timerLine.r.baseVal.value;
    const lengthCircle = getStrokeDasharray(radius);

    timerLine.style.strokeDasharray = lengthCircle;
    timerLine.style.strokeDashoffset = getStrokeDashoffset(ratioOfTimes, lengthCircle);
  }

  static getLevel(level, data) {
    return data[level];
  }
}

export default Utils;
