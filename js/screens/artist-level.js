import ArtistLevelView from '../views/artist-level-view';
import App from '../application';

import {data} from '../data/data';
import pushCurrentAnswer from '../lib/pushCurrentAnswer';
import displayAmountMistakes from '../lib/displayAmountMistakes';
import {displayElement} from '../lib/screenRender';

class ArtistLevelScreen {
  constructor() {
  }

  init(state) {
    this.view = new ArtistLevelView(state);
    const mainWrap = document.querySelector(`.main-wrap`);
    const time = new Date();

    this.view.answerHandler = (evt) => {
      evt.preventDefault();

      const currentLevel = data[this.view.state.level];

      const answerIndex = evt.currentTarget.htmlFor.slice(7);
      const answer = currentLevel.answers[answerIndex].isCorrect;

      this.view.state.level = currentLevel.nextLevel;

      if (!answer) {
        displayAmountMistakes(this.view.state, --this.view.state.lives);
      }

      pushCurrentAnswer(this.view.state, answer, time);
      App.showGame(this.view.state);

      if (this.view.state.answers.length >= 10) {
        App.showResult(this.view.state);
      }
    };

    displayElement(this.view.element, mainWrap);
  }
}

export default new ArtistLevelScreen();
