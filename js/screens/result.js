import ResultView from '../views/result-view';
import App from '../application';
import {displayScreen} from '../lib/utils';

class ResultScreen {
  init(currentResult, listResults) {
    this.view = new ResultView(currentResult, listResults);
    this.view.replayHandler = () => {
      App.showWelcome();
    };
    displayScreen(this.view.element);
  }
}

export default new ResultScreen();
