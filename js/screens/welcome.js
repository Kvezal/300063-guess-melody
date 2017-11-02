import WelcomeView from '../views/welcome-view';
import App from '../application';
import {displayScreen} from '../lib/utils';
import {initialState} from '../data/data';
import {cloneObject} from '../lib/utils';

class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    this.view.startHandler = () => {
      const state = cloneObject(initialState);
      state.answers = [];
      App.showGame(state);
    };

    displayScreen(this.view.element);
  }
}

export default new WelcomeScreen();
