import GameView from '../../views/game-view';
import setStateGame from '../../lib/setStateGame';
import {stateGame} from '../../data/data';
import displayTimer from '../../lib/displayTimer';
import displayAmountMistakes from '../../lib/displayAmountMistakes';
import changeLevelScreen from '../../lib/change-level-screen';

const game = new GameView();
game.init = () => {
  setStateGame();
  stateGame.answers.splice(0, 10);
  displayTimer();
  displayAmountMistakes(stateGame.lives);

  changeLevelScreen();
};

export default () => game;
