import ArtistLevelView from '../views/artist-level-view';
import App from '../application';
import Utils from '../lib/utils';

const START_INDEX_IN_INPUT_ID = 7;

class ArtistLevelScreen {
  init(model) {
    this.view = new ArtistLevelView(model);
    const stateGame = this.view.model.state;

    const mainWrap = document.querySelector(`.main-wrap`);
    const time = new Date();

    this.view.playerControlClickHandler = (evt) => {
      evt.preventDefault();

      if (evt.currentTarget.classList.contains(`player-control--play`)) {
        return Utils.playSong(evt.currentTarget);
      }
      return Utils.stopSong(evt.currentTarget);
    };

    this.view.answerHandler = (evt) => {
      evt.preventDefault();

      const currentLevel = model.getCurrentLevel();
      const answerIndex = evt.currentTarget.htmlFor.slice(START_INDEX_IN_INPUT_ID);
      const answer = currentLevel.answers[answerIndex].isCorrect;

      stateGame.level = currentLevel.nextLevel;

      if (!answer) {
        model.die();
      }

      model.addAnswer(answer, time);
      App.showGame(stateGame);

      if (!model.isCanPlay()) {
        App.showResult(stateGame);
        return;
      }
    };

    Utils.displayElement(this.view.element, mainWrap);
  }
}

export default new ArtistLevelScreen();
