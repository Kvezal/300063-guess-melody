import GenreLevelView from '../../views/genre-level-view';
import {data, stateGame} from '../../data/data';
import pushCurrentAnswer from '../../lib/pushCurrentAnswer';
import displayAmountMistakes from '../../lib/displayAmountMistakes';
import getCheckedFormElement from '../../lib/get-checked-form-element';
import changeLevelScreen from '../../lib/change-level-screen';
import showResult from '../result/result';
import {displayScreen} from '../../lib/screenRender';

const genreLevel = new GenreLevelView();
genreLevel.answerHandler = (evt) => {
  evt.preventDefault();

  const currentLevel = data[stateGame.level];
  const time = new Date();
  const form = evt.currentTarget;
  const answersList = form.querySelectorAll(`input[name="answer"]`);

  const checkedFormElement = getCheckedFormElement(answersList, stateGame.level);

  if (checkedFormElement.length) {
    const answer = checkedFormElement.every((it) => it);
    form.removeEventListener(`submit`, genreLevel.answerHandler);

    stateGame.level = currentLevel.nextLevel;

    pushCurrentAnswer(answer, time);
    changeLevelScreen();

    if (!answer) {
      displayAmountMistakes(--stateGame.lives);
    }

    if (stateGame.answers.length >= 10) {
      displayScreen(showResult().element);
      return;
    }

  }
};

export default () => genreLevel;
