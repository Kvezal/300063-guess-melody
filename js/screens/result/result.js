/* import getElementFromTemplate from '../functions/newDOMElement';
import {displayScreen} from '../functions/screenRender';
import addButtonReplayListener from './buttonReplay';
import {currentState, results, currentAnswers, arrayResults} from '../data';
import calculationOfResults from './calculationOfResults';
import countPoints from './countPoints';

const markupScreenResult = (screen, currentResult) => `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${screen.title}</h2>

    ${calculationOfResults(arrayResults, currentResult)}

    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const displayScreenResult = (screen) => {
  const counterPoints = countPoints(currentAnswers, currentState.lives);

  const currentResult = {
    points: counterPoints.points,
    numberOfQuickAnswers: counterPoints.numberOfQuickAnswers,
    lives: currentState.lives,
    time: currentState.timer.time,
    timeLeft: currentState.time - currentState.timer.time,
    id: arrayResults.length + 1
  };

  // console.log(currentResult);

  const screenResult = getElementFromTemplate(markupScreenResult(results[screen], currentResult));

  window.clearInterval(currentState.timer.id);

  displayScreen(screenResult);

  addButtonReplayListener();
};

export default displayScreenResult;*/

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
