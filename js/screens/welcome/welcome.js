import WelcomeView from '../../views/welcome-view';
import {displayScreen} from '../../lib/screenRender';
import showGame from '../game/game';

const welcome = new WelcomeView();
welcome.startHandler = () => {
  const game = showGame();
  displayScreen(game.element);
  game.init();
};

export default () => welcome;
