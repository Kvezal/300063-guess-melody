import GameView from './game-view';
import {currentState, currentAnswers} from '../data';
import displayAmountMistakes from '../displayAmountMistakes';
import displayTimer from '../displayTimer';
import showLevel from './level';

const game = new GameView();
game.init = () => {
  currentAnswers.splice(0, 10);
  displayTimer();
  displayAmountMistakes(currentState.lives);

  showLevel().init();
};

export default () => game;
