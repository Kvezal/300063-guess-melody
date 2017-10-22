import ResultView from './result-view';
import {displayScreen} from '../functions/screenRender';
import showWelcome from '../welcome/welcome';
import {stateGame, arrayResults} from '../data';
import countPoints from './countPoints';

const result = (currentResult) => new ResultView(currentResult);

result.init = () => {
  const counterPoints = countPoints(stateGame.answers, stateGame.lives);
  const currentResult = {
    points: counterPoints.points,
    numberOfQuickAnswers: counterPoints.numberOfQuickAnswers,
    lives: stateGame.lives,
    time: stateGame.timer.time,
    timeLeft: stateGame.time - stateGame.timer.time,
    id: arrayResults.length + 1
  };

  const showResult = result(currentResult);
  showResult.replayHandler = () => {
    displayScreen(showWelcome().element);
    window.clearInterval(stateGame.timer.id);
  };

  displayScreen(showResult.element);
};

export default () => result;
