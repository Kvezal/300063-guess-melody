import GenreLevelView from '../views/genre-level-view';
import App from '../application';
import {data} from '../data/data';
import {pushCurrentAnswer, displayElement, playSong, stopSong} from '../lib/utils';

class GenreLevelScreen {
  init(state) {
    this.view = new GenreLevelView(state);
    const mainWrap = document.querySelector(`.main-wrap`);
    const time = new Date();

    this.view.playerControlClickHandler = (evt) => {
      evt.preventDefault();

      const lastPlayerControlPlay = document.querySelector(`.player-control--pause`);
      if (!lastPlayerControlPlay) {
        playSong(evt.currentTarget);
        return;
      }
      if (lastPlayerControlPlay === evt.currentTarget) {
        stopSong(evt.currentTarget);
        return;
      }
      if (lastPlayerControlPlay !== evt.currentTarget) {
        stopSong(lastPlayerControlPlay);
        playSong(evt.currentTarget);
      }
    };

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
