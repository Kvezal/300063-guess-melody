import Utils from '../lib/utils';
import {GameParameters} from '../data/data';

class GameModel {
  constructor(data) {
    this.data = data;
  }

  updateState(newState) {
    this.state = newState;
  }

  isCanPlay() {
    return (
      (this.state.lives) >= GameParameters.MIN_COUNT_LIVES &&
      (this.state.time > GameParameters.MIN_COUNT_TIME) &&
      (this.state.answers.length < GameParameters.NUMBER_ANSWERS)
    );
  }

  die() {
    this.setLives(--this.state.lives);
  }

  setLives(lives) {
    this.state.lives = lives;
  }

  tick() {
    --this.state.time;
  }

  addAnswer(answer, time) {
    time = (new Date() - time) / GameParameters.AMOUNT_MILISECONDS_IN_SECONDS;
    this.state.answers.push({answer, time});
  }

  get currentLevel() {
    return Utils.getLevel(this.state.level, this.data);
  }
}

export default GameModel;
