import ArtistLevelView from '../views/artist-level-view';
import App from '../application';
import {data} from '../data/data';
import {pushCurrentAnswer, displayElement, playSong, stopSong} from '../lib/utils';

class ArtistLevelScreen {
  init(state) {
    this.view = new ArtistLevelView(state);
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

      const currentLevel = data[this.view.state.level];
      const answerIndex = evt.currentTarget.htmlFor.slice(7);
      const answer = currentLevel.answers[answerIndex].isCorrect;

      this.view.state.level = currentLevel.nextLevel;

      if (!answer) {
        --this.view.state.lives;
      }

      if (this.view.state.lives < 0) {
        App.showResult(state);
        return;
      }

      pushCurrentAnswer(this.view.state, answer, time);
      App.showGame(this.view.state);

      if (this.view.state.answers.length >= 10) {
        App.showResult(this.view.state);
      }
    };

    displayElement(this.view.element, mainWrap);

    document.querySelector(`audio`).play();
  }
}

export default new ArtistLevelScreen();
