import App from '../application';
import GameModel from '../models/game-model';
import GameView from '../views/game-view';
import Utils from '../lib/utils';
import artistLevel from './artist-level-screen';
import genreLevel from './genre-level-screen';

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

    this.view.artistLevel = artistLevel.init(this.model);
    this.view.genreLevel = genreLevel.init(this.model);

    Utils.displayScreen(this.view.element);
  }
}

export default GameScreen;
