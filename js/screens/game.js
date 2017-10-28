import App from '../application';
import GameView from '../views/game-view';
import {displayAmountMistakes, displayScreen} from '../lib/utils';

class GameScreen {
  init(state) {
    state = this.setStateGame(state);
    this.view = new GameView(state);

    displayScreen(this.view.element);
    this.tick();
    displayAmountMistakes(this.view.state, this.view.state.lives);

    App.changeLevel(this.view.state);
  }

  displayTimer(time, DOMMinutes, DOMSeconds) {
    let minutes = Math.trunc(this.view.state.time / 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    DOMMinutes.textContent = minutes;

    let seconds = Math.trunc(this.view.state.time % 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    DOMSeconds.textContent = seconds;
  }

  tick() {
    window.clearInterval(this.view.state.timerId);

    const DOMTimerValue = document.querySelector(`.timer-value`);
    const DOMTimerMinutes = DOMTimerValue.querySelector(`.timer-value-mins`);
    const DOMTimerSeconds = DOMTimerValue.querySelector(`.timer-value-secs`);
    this.displayTimer(this.view.state.time, DOMTimerMinutes, DOMTimerSeconds);
    // const timerLine = document.querySelector(`.timer-line`);

    this.view.state.timerId = window.setInterval(() => {
      this.view.state.time -= 0.125;
      if (this.view.state.time <= 30 && !DOMTimerValue.classList.contains(`timer-value--finished`)) {
        DOMTimerValue.classList.add(`timer-value--finished`);
      }

      this.displayTimer(this.view.state.time, DOMTimerMinutes, DOMTimerSeconds);

      // const ratioOfTimes = stateGame.timer.time / stateGame.time;

      // const ratioOfCircumferences = getRadius(ratioOfTimes, timerLine.r.baseVal.value);

      // console.log(stateGame.time, stateGame.timer.time, timerLine.r.baseVal.value)
      // timerLine.style.strokeDasharray = ratioOfCircumferences.stroke;
      // timerLine.style.strokeDashoffset = ratioOfCircumferences.offset;

      if (this.view.state.time <= 0) {
        App.showResult(this.view.state);
      }
    }, 125);
  }

  setStateGame(state) {
    const newState = {
      answers: []
    };
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        newState[key] = state[key];
      }
    }
    return newState;
  }
}

export default new GameScreen();
