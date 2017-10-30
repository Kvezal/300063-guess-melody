import GenreLevelView from '../views/genre-level-view';
import App from '../application';
import {displayElement, playSong, stopSong} from '../lib/utils';

class GenreLevelScreen {
  init(model) {
    this.view = new GenreLevelView(model);
    const stateGame = this.view.model.state;

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

      const currentLevel = model.getCurrentLevel();
      const form = evt.currentTarget;
      const answersList = form.querySelectorAll(`input[name="answer"]`);

      const checkedFormElement = this.getCheckedFormElement(answersList);

      if (checkedFormElement.length) {
        const answer = checkedFormElement.every((it) => it);
        form.removeEventListener(`submit`, this.view.answerHandler);

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
      }
    };

    displayElement(this.view.element, mainWrap);
  }

  getCheckedFormElement(list) {
    const result = [];
    const currentLevel = this.view.model.getCurrentLevel();

    Array.prototype.forEach.call(list, (it, index) => {
      if (it.checked) {
        result.push(currentLevel.answers[index].isCorrect === it.checked);
      }
      return false;
    });

    return result;
  }
}

export default new GenreLevelScreen();
