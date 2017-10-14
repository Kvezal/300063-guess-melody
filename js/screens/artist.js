import getElementFromTemplate from './functions/newDOMElement';
import displayScreen from './functions/screenRender';
import displayScreenGenre from './genre';
// import displayScreenResultTimeIsOver from './result-time-is-over';
// import timer from './timer';

import player from './player';
import {artistGame} from './game';

const markupScreenArtist = `
  <section class="main main--level main--level-artist">
    ${player}

    <div class="main-wrap">
      ${artistGame}
    </div>
  </section>`;

const displayScreenArtist = () => {
  const screenArtist = getElementFromTemplate(markupScreenArtist);
  displayScreen(screenArtist);

  const answersList = document.querySelector(`.main-list`);

  const answersListClickHandler = (evt) => {
    let target = evt.target;

    answersList.removeEventListener(`click`, answersListClickHandler);
    //    window.clearInterval(artistTimerId);

    while (!target.classList.contains(`main-list`)) {
      if (target.classList.contains(`main-answer`)) {
        displayScreenGenre();
        return;
      }

      target = target.parentElement;
    }
  };

  answersList.addEventListener(`click`, answersListClickHandler);


  // Для демонстрации работы таймера
//  let artistTimer = timer(2);
//
//  let artistTimerId = window.setInterval(() => {
//    if (artistTimer.state) {
//      window.clearInterval(artistTimerId);
//      displayScreenResultTimeIsOver();
//    }
//  }, 250);
};

export default displayScreenArtist;
