import WelcomeView from './welcome-view';
import {displayScreen} from '../functions/screenRender';
import showGame from '../game/game';
import setStateGame from '../setStateGame';

const welcome = new WelcomeView();
welcome.startHandler = () => {
  setStateGame();
  const game = showGame();
  displayScreen(game.element);
  game.init();
};

export default () => welcome;
