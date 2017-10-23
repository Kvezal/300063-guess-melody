import ResultView from '../../views/result-view';
import {displayScreen} from '../../lib/screenRender';
import showWelcome from '../welcome/welcome';
import {stateGame} from '../../data/data';

const result = new ResultView();
result.replayHandler = () => {
  displayScreen(showWelcome().element);
};

result.init = () => {
  window.clearInterval(stateGame.timer.id);
};

export default () => result;
