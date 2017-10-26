import App from '../application';
import GameView from '../views/game-view';

import setStateGame from '../lib/setStateGame';
import {initialState} from '../data/data';
import displayTimer from '../lib/displayTimer';
import displayAmountMistakes from '../lib/displayAmountMistakes';
import {displayScreen} from '../lib/screenRender';

class GameScreen {
  init(state = initialState) {
    state = setStateGame(state);
    this.view = new GameView(state);
    // state.answers.splice(0, 10);

    displayScreen(this.view.element);
    displayTimer(this.view.state);
    displayAmountMistakes(this.view.state, this.view.state.lives);

    App.changeLevel(this.view.state);
  }
}

export default new GameScreen();
