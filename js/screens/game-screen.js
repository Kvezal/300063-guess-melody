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

  displayTimer(time, domMinutes, domSeconds, timerLine) {
    const stateGame = this.view.model.state;

    let minutes = Math.trunc(stateGame.time / GameParameters.COUNT_OF_SECONDS_IN_MINUTE);
    domMinutes.textContent = (minutes < GameParameters.DECIMAL_NUMBER_SYSTEM) ?
      `0${minutes}` : minutes;

    let seconds = Math.trunc(stateGame.time % GameParameters.COUNT_OF_SECONDS_IN_MINUTE);
    domSeconds.textContent = (seconds < GameParameters.DECIMAL_NUMBER_SYSTEM) ?
      `0${seconds}` : seconds;

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

    const domTimerValue = document.querySelector(`.timer-value`);
    const domTimerMinutes = domTimerValue.querySelector(`.timer-value-mins`);
    const domTimerSeconds = domTimerValue.querySelector(`.timer-value-secs`);
    const timerLine = document.querySelector(`.timer-line`);
    this.displayTimer(stateGame.time, domTimerMinutes, domTimerSeconds, timerLine);

    stateGame.timerId = window.setInterval(() => {
      model.tick();
      if (stateGame.time <= TIME_LEFT && !domTimerValue.classList.contains(`timer-value--finished`)) {
        domTimerValue.classList.add(`timer-value--finished`);
      }

      this.displayTimer(stateGame.time, domTimerMinutes, domTimerSeconds, timerLine);

      if (!model.isCanPlay()) {
        App.showResult(stateGame);
      }
    }, ONE_SECOND);
  }
}

export default GameScreen;
