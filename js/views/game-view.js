import AbstractView from './abstract-view';
import {initialState} from '../data/data';
import Utils from '../lib/utils';

const TIME_LEFT = 30;
const ONE_SECOND = 1000;

class GameView extends AbstractView {
  constructor(model) {
    super();

    this.model = model;
  }

  get template() {
    return (
      `<section class="main main--level">
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle
            cx="390" cy="390" r="370"
            class="timer-line"
            style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
        </svg>
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">05</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">00</span>
        </div>
        <div class="main-mistakes">${this.amountMistakes}</div>
        <div class="main-wrap"></div>
      </section>`
    );
  }

  static get templateMistake() {
    return `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;
  }

  get amountMistakes() {
    const amountMistakes = initialState.lives - this.model.state.lives;
    const amountMistakesTemplate = [];
    for (let i = 0; i < amountMistakes; i++) {
      amountMistakesTemplate.push(GameView.templateMistake);
    }
    return amountMistakesTemplate.join(` `);
  }

  bind(element) {
    const timerValue = element.querySelector(`.timer-value`);
    const timerLine = element.querySelector(`.timer-line`);
    this.tick(timerValue, timerLine);
  }

  tick(timerValue, timerLine) {
    const model = this.model;
    const state = model.state;

    window.clearTimeout(state.timerId);
    Utils.changeTimer(state.time, timerValue, timerLine);

    state.timerId = window.setTimeout(() => {
      model.tick();

      if (state.time <= TIME_LEFT && !timerValue.classList.contains(`timer-value--finished`)) {
        timerValue.classList.add(`timer-value--finished`);
      }
      this.tick(timerValue, timerLine);
    }, ONE_SECOND);
  }
}

export default GameView;
