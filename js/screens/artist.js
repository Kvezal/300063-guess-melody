import getElementFromTemplate from './functions/newDOMElement';
import {displayScreen, displayElement} from './functions/screenRender';
import displayScreenGenre from './genre';
// import displayScreenResultTimeIsOver from './result-time-is-over';
// import timer from './timer';

import player from './player';
import {artistGame} from './game';
import {initialState} from './data';
import {artistLevels} from './data';

const getMarkupScreenArtist =
  `<section class="main main--level main--level-artist">
    <div class="main-wrap"></div>
  </section>`;

const displayScreenArtist = (state) => {
  const screenArtist = getElementFromTemplate(getMarkupScreenArtist);
  displayScreen(screenArtist);

  const mainWrap = document.querySelector(`.main-wrap`);

  const mainWrapClickHandler = (evt) => {
    let target = evt.target;

    mainWrap.removeEventListener(`click`, mainWrapClickHandler);
    //    window.clearInterval(artistTimerId);

    while (!target.classList.contains(`main-list`)) {
      if (target.classList.contains(`main-answer`)) {
        displayScreenGenre(initialState);
        player(initialState);
        return;
      }

      target = target.parentElement;
    }
  };

  mainWrap.addEventListener(`click`, mainWrapClickHandler);

  player(initialState, mainWrap);
  displayElement(artistGame(artistLevels[state.level]), mainWrap);

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
