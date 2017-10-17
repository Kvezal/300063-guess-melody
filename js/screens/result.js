import getElementFromTemplate from './functions/newDOMElement';
import {displayScreen} from './functions/screenRender';
import addButtonReplayListener from './buttonReplay';
import {initialState, results} from './data';
// import calculationOfResults from '../calculationOfResults';
import countPoints from '../result/countPoints';

const markupScreenResult = (screen) => `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${screen.title}</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const displayScreenResult = (screen) => {

  const currentResult = {
    points: 0,
    lives: 3,
    timeLeft: 10000,
    id: 5
  };

  const screenResult = getElementFromTemplate(markupScreenResult(results[screen]));

  window.clearInterval(initialState.timerId);

  displayScreen(screenResult);

  addButtonReplayListener();

  initialState.level = 0;
  initialState.lives = 3;
};

export default displayScreenResult;
