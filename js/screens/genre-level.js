import GenreLevelView from '../views/genre-level-view';
import App from '../application';

import {data} from '../data/data';
import pushCurrentAnswer from '../lib/pushCurrentAnswer';
import displayAmountMistakes from '../lib/displayAmountMistakes';
import {displayElement} from '../lib/screenRender';

class GenreLevelScreen {
  constructor() {
  }

  init(state) {
    this.view = new GenreLevelView(state);
    const mainWrap = document.querySelector(`.main-wrap`);
    const time = new Date();

    this.view.answerHandler = (evt) => {
      evt.preventDefault();

      const currentLevel = data[this.view.state.level];
      const form = evt.currentTarget;
      const answersList = form.querySelectorAll(`input[name="answer"]`);

      const checkedFormElement = this.getCheckedFormElement(answersList, this.view.state.level);

      if (checkedFormElement.length) {
        const answer = checkedFormElement.every((it) => it);
        form.removeEventListener(`submit`, this.view.answerHandler);

        this.view.state.level = currentLevel.nextLevel;

        pushCurrentAnswer(this.view.state, answer, time);
        App.changeLevel(this.view.state);

        if (!answer) {
          displayAmountMistakes(this.view.state, --this.view.state.lives);
        }

        if (this.view.state.answers.length >= 10) {
          App.showResult(this.view.state);
          return;
        }
      }
    };

    displayElement(this.view.element, mainWrap);
  }

  getCheckedFormElement(list, actualLevel) {
    const result = [];

    Array.prototype.forEach.call(list, (it, index) => {
      if (it.checked) {
        result.push(data[actualLevel].answers[index].isCorrect === it.checked);
      }
      return false;
    });

    return result;
  }
}

export default new GenreLevelScreen();
