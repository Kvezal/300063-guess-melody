import AbstractView from './abstract-view';
import {initialState} from '../data/data';

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
        <div class="main-mistakes">${this.getAmountMistakes(this.model.state, this.model.state.lives)}</div>
        <div class="main-wrap"></div>
      </section>`
    );
  }

  get templateMistake() {
    return `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`;
  }

  getAmountMistakes(state, amountLives) {
    const amountMistakes = initialState.lives - amountLives;
    const amountMistakesTemplate = [];
    for (let i = 0; i < amountMistakes; i++) {
      amountMistakesTemplate.push(this.templateMistake);
    }
    return amountMistakesTemplate.join(` `);
  }
}

export default GameView;
