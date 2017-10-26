import ResultView from '../views/result-view';
import showWelcome from './welcome';
import {displayScreen} from '../lib/screenRender';

class ResultScreen {
  constructor() {
  }

  init(state) {
    this.view = new ResultView(state);
    window.clearInterval(this.view.state.timer.id);
    this.view.replayHandler = () => {
      showWelcome.init();
    };
    displayScreen(this.view.element);
  }
}

export default new ResultScreen();
