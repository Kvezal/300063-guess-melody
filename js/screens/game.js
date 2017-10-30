import App from '../application';
import GameModel from '../models/game-model';
import GameView from '../views/game-view';
import {displayScreen} from '../lib/utils';

class GameScreen {
  constructor(data) {
    this.model = new GameModel(data);
  }

  init(state) {
    this.model.updateState(state);
    this.view = new GameView(this.model);
    displayScreen(this.view.element);
    this.tick();
    App.changeLevel(this.view.model);
  }

  displayTimer(time, DOMMinutes, DOMSeconds) {
    const stateGame = this.view.model.state;

    let minutes = Math.trunc(stateGame.time / 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    DOMMinutes.textContent = minutes;

    let seconds = Math.trunc(stateGame.time % 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    DOMSeconds.textContent = seconds;
  }

  tick() {
    const model = this.view.model;
    const stateGame = model.state;
    window.clearInterval(stateGame.timerId);

    const DOMTimerValue = document.querySelector(`.timer-value`);
    const DOMTimerMinutes = DOMTimerValue.querySelector(`.timer-value-mins`);
    const DOMTimerSeconds = DOMTimerValue.querySelector(`.timer-value-secs`);
    this.displayTimer(stateGame.time, DOMTimerMinutes, DOMTimerSeconds);
    // const timerLine = document.querySelector(`.timer-line`);

    stateGame.timerId = window.setInterval(() => {
      model.tick();
      if (stateGame.time <= 30 && !DOMTimerValue.classList.contains(`timer-value--finished`)) {
        DOMTimerValue.classList.add(`timer-value--finished`);
      }

      this.displayTimer(stateGame.time, DOMTimerMinutes, DOMTimerSeconds);

      // const ratioOfTimes = stateGame.timer.time / stateGame.time;

      // const ratioOfCircumferences = getRadius(ratioOfTimes, timerLine.r.baseVal.value);

      // console.log(stateGame.time, stateGame.timer.time, timerLine.r.baseVal.value)
      // timerLine.style.strokeDasharray = ratioOfCircumferences.stroke;
      // timerLine.style.strokeDashoffset = ratioOfCircumferences.offset;

      if (!model.isCanPlay()) {
        App.showResult(stateGame);
      }
    }, 1000);
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

export default GameScreen;
