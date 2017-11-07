import App from '../application';
import Utils from '../lib/utils';

const START_INDEX_IN_INPUT_ID = 7;

class ArtistLevelScreen {
  init(gameModel) {
    const stateGame = gameModel.state;
    const time = new Date();

    this.playerControlClickHandler = (evt) => {
      evt.preventDefault();

      if (evt.currentTarget.classList.contains(`player-control--play`)) {
        return Utils.playSong(evt.currentTarget);
      }
      return Utils.stopSong(evt.currentTarget);
    };

    this.answerHandler = (evt) => {
      evt.preventDefault();

      const currentLevel = gameModel.currentLevel;
      const answerIndex = evt.currentTarget.htmlFor.slice(START_INDEX_IN_INPUT_ID);
      const answer = currentLevel.answers[answerIndex].isCorrect;

      stateGame.level = currentLevel.nextLevel;

      if (!answer) {
        gameModel.die();
      }

      gameModel.addAnswer(answer, time);

      if (!gameModel.isCanPlay()) {
        App.showResult(stateGame);
        return;
      }
      App.showGame(stateGame);
    };
    return this;
  }
}

export default new ArtistLevelScreen();
