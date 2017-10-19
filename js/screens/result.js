import getElementFromTemplate from './functions/newDOMElement';
import {displayScreen} from './functions/screenRender';
import addButtonReplayListener from './buttonReplay';
import {currentState, results, currentAnswers, arrayResults} from './data';
import calculationOfResults from '../result/calculationOfResults';
import countPoints from '../result/countPoints';
import setCurrentState from './setCurrentState';

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
    timeLeft: currentState.time - currentState.timer.time,
    id: arrayResults.length + 1
  };

  // console.log(currentResult);

  const screenResult = getElementFromTemplate(markupScreenResult(results[screen], currentResult));

  window.clearInterval(currentState.timer.id);

  displayScreen(screenResult);

  addButtonReplayListener();

  setCurrentState();
};

export default displayScreenResult;
