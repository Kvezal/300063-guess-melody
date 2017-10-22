import GameView from './game-view';
import {stateGame} from '../data';
import displayAmountMistakes from '../displayAmountMistakes';
import displayTimer from '../displayTimer';
import showLevel from './level';

const game = new GameView();
game.init = () => {
  stateGame.answers.splice(0, 10);
  displayTimer();
  displayAmountMistakes(stateGame.lives);

  showLevel().init();
};

export default () => game;
