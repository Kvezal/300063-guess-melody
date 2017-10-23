import ArtistLevelView from '../../views/artist-level-view';
import {data, stateGame} from '../../data/data';
import pushCurrentAnswer from '../../lib/pushCurrentAnswer';
import displayAmountMistakes from '../../lib/displayAmountMistakes';
import changeLevelScreen from '../../lib/change-level-screen';
import showResult from '../result/result';

const artistLevel = new ArtistLevelView();
artistLevel.answerHandler = (evt) => {
  evt.preventDefault();

  const currentLevel = data[stateGame.level];
  const time = new Date();

  const answerIndex = evt.currentTarget.htmlFor.slice(7);
  const answer = currentLevel.answers[answerIndex].isCorrect;

  stateGame.level = currentLevel.nextLevel;

  pushCurrentAnswer(answer, time);
  changeLevelScreen();

  if (!answer) {
    displayAmountMistakes(--stateGame.lives);
  }

  if (stateGame.answers.length >= 10) {
    showResult().init();
    return;
  }

};

export default () => artistLevel;
