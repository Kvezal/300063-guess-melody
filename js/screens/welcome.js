import WelcomeView from '../views/welcome-view';
import App from '../application';
import {displayScreen} from '../lib/utils';

class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    this.view.startHandler = () => {
      App.showGame();
    };

    displayScreen(this.view.element);
  }
}

export default new WelcomeScreen();
