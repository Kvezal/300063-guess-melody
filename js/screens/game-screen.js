import App from '../application';
import GameModel from '../models/game-model';
import GameView from '../views/game-view';
import Utils from '../lib/utils';

class GameScreen {
  constructor(data) {
    this.model = new GameModel(data);
  }

  init(state) {
    this.model.updateState(state);
    this.view = new GameView(this.model);

    const viewTick = this.view.tick;

    this.view.tick = (timerValue, timerLine) => {
      viewTick.call(this.view, timerValue, timerLine);
      if (!this.model.isCanPlay()) {
        App.showResult(state);
        return;
      }
    };

    Utils.displayScreen(this.view.element);
    App.changeLevel(this.view.model);
  }
}

export default GameScreen;
