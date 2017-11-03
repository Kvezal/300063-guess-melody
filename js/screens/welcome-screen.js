import WelcomeView from '../views/welcome-view';
import App from '../application';
import Utils from '../lib/utils';
import {initialState} from '../data/data';

class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    this.view.startHandler = () => {
      const state = Object.assign({}, initialState);
      state.answers = [];
      App.showGame(state);
    };

    Utils.displayScreen(this.view.element);
  }
}

export default new WelcomeScreen();
