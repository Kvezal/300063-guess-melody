import ResultView from './result-view';
import {displayScreen} from '../functions/screenRender';
import showWelcome from '../welcome/welcome';
import {currentAnswers, currentState, arrayResults} from '../data';
import countPoints from './countPoints';

const result = (currentResult) => new ResultView(currentResult);

result.init = () => {
  const counterPoints = countPoints(currentAnswers, currentState.lives);
  const currentResult = {
    points: counterPoints.points,
    numberOfQuickAnswers: counterPoints.numberOfQuickAnswers,
    lives: currentState.lives,
    time: currentState.timer.time,
    timeLeft: currentState.time - currentState.timer.time,
    id: arrayResults.length + 1
  };

  const showResult = result(currentResult);
  showResult.replayHandler = () => {
    displayScreen(showWelcome().element);
    window.clearInterval(currentState.timer.id);
  };

  displayScreen(showResult.element);
};

export default () => result;
