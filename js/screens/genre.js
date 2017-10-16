import getElementFromTemplate from './functions/newDOMElement';
import {displayScreen, displayElement} from './functions/screenRender';
import displayScreenResultWin from './result-win';
import displayScreenResultTimeIsOver from './result-time-is-over';
import displayScreenResultAttemptsEnded from './result-attempts-ended';
// import timer from './timer';
import player from './player';
import {genreGame} from './game';
import {initialState} from './data';
import {genreLevels} from './data';

const RESULT_SCREENS = [
  displayScreenResultWin,
  displayScreenResultTimeIsOver,
  displayScreenResultAttemptsEnded
];

const getMarkupScreenGenre =
  `<section class="main main--level main--level-genre">
    <div class="main-wrap"></div>
  </section>`;

const displayScreenGenre = (state) => {
  const screenGenre = getElementFromTemplate(getMarkupScreenGenre);
  displayScreen(screenGenre);

  const mainWrap = document.querySelector(`.main-wrap`);
  player(initialState, mainWrap);
  displayElement(genreGame(genreLevels[state.level]), mainWrap);

  const checkFormGenre = (list) => Array.prototype.some.call(list, (it) => it.checked);

  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  const formGenre = document.querySelector(`.genre`);

  const formGenreSubmitHandler = (evt) => {
    evt.preventDefault();

    const answersList = document.querySelectorAll(`input[name="answer"]`);

    if (checkFormGenre(answersList)) {
      formGenre.removeEventListener(`submit`, formGenreSubmitHandler);

      //      window.clearInterval(genreTimerId);

      RESULT_SCREENS[getRandomNumber(RESULT_SCREENS.length)]();
    }
  };

  formGenre.addEventListener(`submit`, formGenreSubmitHandler);

  // Для демонстрации работы таймера
//  let genreTimer = timer(3);
//
//  let genreTimerId = window.setInterval(() => {
//    if (genreTimer.state) {
//      window.clearInterval(genreTimerId);
//      displayScreenResultTimeIsOver();
//    }
//  }, 250);
};

export default displayScreenGenre;
