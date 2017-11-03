import {initialState} from '../data/data';
import countPoints from '../lib/count-points';

const appDisplay = document.querySelector(`.main`);

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

  static getStrokeDasharray(radius) {
    return Math.floor(2 * Math.PI * radius);
  }

  static getStrokeDashoffset(ratioOfTimes, lengthCircle) {
    return (1 - ratioOfTimes) * lengthCircle;
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

  static getLevel(level, data) {
    return data[level];
  }
}

export default Utils;
