const getLevel = (level, data) => {
  return data[level];
};

class GameModel {
  constructor(data) {
    this.data = data;
  }

  updateState(newState) {
    this.state = newState;
  }

  isCanPlay() {
    return (this.state.lives) >= 0 && (this.state.time > 0) && (this.state.answers.length < 10);
  }

  die() {
    this.setLives(--this.state.lives);
  }

  setLives(lives) {
    if (this.state.lives < 0) {
      throw new RangeError(`Can't set negative lives`);
    }
    this.state.lives = lives;
  }

  tick() {
    --this.state.time;
  }

  addAnswer(answer, time) {
    time = (new Date() - time) / 1000;
    this.state.answers.push({answer, time});
  }

  getCurrentLevel() {
    return getLevel(this.state.level, this.data);
  }
}

export default GameModel;
