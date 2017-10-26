import WelcomeView from '../views/welcome-view';
import showGame from './game';
import {displayScreen} from '../lib/screenRender';

class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    this.view.startHandler = () => {
      showGame.init();
    };

    displayScreen(this.view.element);
  }
}

export default new WelcomeScreen();
