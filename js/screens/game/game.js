import GameView from '../../views/game-view';
import {stateGame} from '../../data/data';
import displayAmountMistakes from '../../lib/displayAmountMistakes';
import displayTimer from '../../lib/displayTimer';
import showLevel from './level';
import setStateGame from '../../lib/setStateGame';

const game = new GameView();
game.init = () => {
  setStateGame();
  stateGame.answers.splice(0, 10);
  displayTimer();
  displayAmountMistakes(stateGame.lives);

  showLevel().init();
};

export default () => game;
