import ArtistLevelView from '../views/artist-level-view';
import App from '../application';
import {displayElement, playSong, stopSong} from '../lib/utils';

class ArtistLevelScreen {
  init(model) {
    this.view = new ArtistLevelView(model);
    const stateGame = this.view.model.state;

    const mainWrap = document.querySelector(`.main-wrap`);
    const time = new Date();

    this.view.playerControlClickHandler = (evt) => {
      evt.preventDefault();

      if (evt.currentTarget.classList.contains(`player-control--play`)) {
        playSong(evt.currentTarget);
      } else {
        stopSong(evt.currentTarget);
      }
    };

    this.view.answerHandler = (evt) => {
      evt.preventDefault();

      const currentLevel = model.getCurrentLevel();
      const answerIndex = evt.currentTarget.htmlFor.slice(7);
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

    displayElement(this.view.element, mainWrap);

    document.querySelector(`audio`).play();
  }
}

export default new ArtistLevelScreen();
