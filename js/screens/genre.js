import getElementFromTemplate from './functions/newDOMElement';
import displayScreen from './functions/screenRender';
import displayScreenResultWin from './result-win';
import displayScreenResultTimeIsOver from './result-time-is-over';
import displayScreenResultAttemptsEnded from './result-attempts-ended';
// import timer from './timer';
import player from './player';
import {genreGame} from './game';

const RESULT_SCREENS = [
  displayScreenResultWin,
  displayScreenResultTimeIsOver,
  displayScreenResultAttemptsEnded
];

const markupScreenGenre = `
  <section class="main main--level main--level-genre">
    ${player}

    <div class="main-wrap">
      ${genreGame}
    </div>
  </section>`;

const displayScreenGenre = () => {
  const screenGenre = getElementFromTemplate(markupScreenGenre);
  displayScreen(screenGenre);

  const answersList = document.querySelectorAll(`input[name="answer"]`);
  const formGenre = document.querySelector(`.genre`);

  const checkFormGenre = () => Array.prototype.some.call(answersList, (it) => it.checked);

  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  const formGenreSubmitHandler = (evt) => {
    evt.preventDefault();

    if (checkFormGenre()) {
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
