import App from '../application';
import Utils from '../lib/utils';

class GenreLevelScreen {
  init(gameModel) {
    this.model = gameModel;
    this.stateGame = this.model.state;
    const time = new Date();

    this.playerControlClickHandler = (evt) => {
      evt.preventDefault();

      const lastPlayerControlPlay = document.querySelector(`.player-control--pause`);
      if (!lastPlayerControlPlay) {
        Utils.playSong(evt.currentTarget);
        return;
      }
      if (lastPlayerControlPlay === evt.currentTarget) {
        Utils.stopSong(evt.currentTarget);
        return;
      }
      if (lastPlayerControlPlay !== evt.currentTarget) {
        Utils.stopSong(lastPlayerControlPlay);
        Utils.playSong(evt.currentTarget);
      }
    };

    this.answerHandler = (evt) => {
      evt.preventDefault();

      const currentLevel = gameModel.currentLevel;
      const form = evt.currentTarget;
      const answersList = form.querySelectorAll(`input[name="answer"]`);

      const checkedFormElement = this.getCheckedFormElement(answersList);

      if (checkedFormElement.length) {
        const answer = checkedFormElement.every((it) => it);
        form.removeEventListener(`submit`, this.answerHandler);

        this.stateGame.level = currentLevel.nextLevel;

        if (!answer) {
          gameModel.die();
        }

        gameModel.addAnswer(answer, time);

        if (!gameModel.isCanPlay()) {
          App.showResult(this.stateGame);
          return;
        }

        App.showGame(this.stateGame);
      }
    };

    return this;
  }

  getCheckedFormElement(list) {
    const result = [];
    const currentLevel = this.model.currentLevel;

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
