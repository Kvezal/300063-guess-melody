import App from '../application';
import GameView from '../views/game-view';

import setStateGame from '../lib/setStateGame';
import {initialState} from '../data/data';
import displayAmountMistakes from '../lib/displayAmountMistakes';
import {displayScreen} from '../lib/screenRender';

class GameScreen {
  init(state = initialState) {
    state = setStateGame(state);
    this.view = new GameView(state);
    // state.answers.splice(0, 10);

    displayScreen(this.view.element);
    this.tick();
    displayAmountMistakes(this.view.state, this.view.state.lives);

    App.changeLevel(this.view.state);
  }

  tick() {
    const DOMTimerMinutes = document.querySelector(`.timer-value-mins`);
    const DOMTimerSeconds = document.querySelector(`.timer-value-secs`);
    // const timerLine = document.querySelector(`.timer-line`);

    this.view.state.timerId = window.setInterval(() => {
      --this.view.state.time;

      let minutes = Math.trunc(this.view.state.time / 60);
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      let seconds = this.view.state.time % 60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      // const ratioOfTimes = stateGame.timer.time / stateGame.time;

      // const ratioOfCircumferences = getRadius(ratioOfTimes, timerLine.r.baseVal.value);

      // console.log(stateGame.time, stateGame.timer.time, timerLine.r.baseVal.value)

      DOMTimerMinutes.textContent = minutes;
      DOMTimerSeconds.textContent = seconds;
      // timerLine.style.strokeDasharray = ratioOfCircumferences.stroke;
      // timerLine.style.strokeDashoffset = ratioOfCircumferences.offset;

      if (this.view.state.time <= 0) {
        App.showResult(this.view.state);
      }
    }, 1000);
  }
}

export default new GameScreen();
