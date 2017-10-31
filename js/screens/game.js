import App from '../application';
import GameModel from '../models/game-model';
import GameView from '../views/game-view';
import {displayScreen} from '../lib/utils';
import {initialState} from '../data/data';
import {getStrokeDasharray, getStrokeDashoffset} from '../lib/utils';

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
    const timerLine = document.querySelector(`.timer-line`);

    stateGame.timerId = window.setInterval(() => {
      model.tick();
      if (stateGame.time <= 30 && !DOMTimerValue.classList.contains(`timer-value--finished`)) {
        DOMTimerValue.classList.add(`timer-value--finished`);
      }

      this.displayTimer(stateGame.time, DOMTimerMinutes, DOMTimerSeconds);

      const ratioOfTimes = stateGame.time / initialState.time;
      const radius = timerLine.r.baseVal.value;
      const lengthCircle = getStrokeDasharray(radius);

      timerLine.style.strokeDasharray = lengthCircle;
      timerLine.style.strokeDashoffset = getStrokeDashoffset(ratioOfTimes, lengthCircle);

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

/* this.displayTimer(stateGame.time, DOMTimerMinutes, DOMTimerSeconds);

      const ratioOfTimes = stateGame.time / initialState.time;
      const radius = timerLine.r.baseVal.value;
      const lengthCircle = 2325;
      timerLine.style.strokeDasharray = lengthCircle;
      timerLine.style.strokeDashoffset = getStrokeDashoffset(lengthCircle, ratioOfTimes);*/
