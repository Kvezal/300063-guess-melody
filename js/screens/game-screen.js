import App from '../application';
import GameModel from '../models/game-model';
import GameView from '../views/game-view';
import {initialState, GameParameters} from '../data/data';
import Utils from '../lib/utils';

const TIME_LEFT = 30;
const ONE_SECOND = 1000;

class GameScreen {
  constructor(data) {
    this.model = new GameModel(data);
  }

  init(state) {
    this.model.updateState(state);
    this.view = new GameView(this.model);
    Utils.displayScreen(this.view.element);
    this.tick();
    App.changeLevel(this.view.model);
  }

  displayTimer(time, DOMMinutes, DOMSeconds, timerLine) {
    const stateGame = this.view.model.state;

    let minutes = Math.trunc(stateGame.time / GameParameters.COUNT_OF_SECONDS_IN_MINUTE);
    if (minutes < GameParameters.DECIMAL_NUMBER_SYSTEM) {
      minutes = `0${minutes}`;
    }
    DOMMinutes.textContent = minutes;

    let seconds = Math.trunc(stateGame.time % GameParameters.COUNT_OF_SECONDS_IN_MINUTE);
    if (seconds < GameParameters.DECIMAL_NUMBER_SYSTEM) {
      seconds = `0${seconds}`;
    }
    DOMSeconds.textContent = seconds;

    const ratioOfTimes = stateGame.time / initialState.time;
    const radius = timerLine.r.baseVal.value;
    const lengthCircle = Utils.getStrokeDasharray(radius);

    timerLine.style.strokeDasharray = lengthCircle;
    timerLine.style.strokeDashoffset = Utils.getStrokeDashoffset(ratioOfTimes, lengthCircle);
  }

  tick() {
    const model = this.view.model;
    const stateGame = model.state;
    window.clearInterval(stateGame.timerId);

    const DOMTimerValue = document.querySelector(`.timer-value`);
    const DOMTimerMinutes = DOMTimerValue.querySelector(`.timer-value-mins`);
    const DOMTimerSeconds = DOMTimerValue.querySelector(`.timer-value-secs`);
    const timerLine = document.querySelector(`.timer-line`);
    this.displayTimer(stateGame.time, DOMTimerMinutes, DOMTimerSeconds, timerLine);

    stateGame.timerId = window.setInterval(() => {
      model.tick();
      if (stateGame.time <= TIME_LEFT && !DOMTimerValue.classList.contains(`timer-value--finished`)) {
        DOMTimerValue.classList.add(`timer-value--finished`);
      }

      this.displayTimer(stateGame.time, DOMTimerMinutes, DOMTimerSeconds, timerLine);

      if (!model.isCanPlay()) {
        App.showResult(stateGame);
      }
    }, ONE_SECOND);
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
