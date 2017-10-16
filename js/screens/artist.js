import getElementFromTemplate from './functions/newDOMElement';
import {displayElement} from './functions/screenRender';
import changeLevelScreen from './changeLevelScreen';
import {data, currentAnswers} from './data';

import displayScreenResultWin from './result-win';

const getArtistAnswerOptions = (answers) => {
  return [...answers].map((item, index) => {
    return (
      `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}"/>
        <label class="main-answer" for="answer-${index}">
          <img class="main-answer-preview" src="${item.image}"
               alt="${item.artist}" width="134" height="134">
          Пелагея
        </label>
      </div>`
    );
  }).join(``);
};

const artistGame = (level) =>
  getElementFromTemplate(`<h2 class="title main-title">Кто исполняет эту песню?</h2>
  <div class="player-wrapper">
    <div class="player">
      <audio src="${level.question}"></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <form class="main-list">
    ${getArtistAnswerOptions(level.answers)}
  </form>`);

const displayScreenArtist = (level) => {
  const mainWrap = document.querySelector(`.main-wrap`);

  displayElement(artistGame(data[level]), mainWrap);

  const currentLevel = data[level];
  const nextLevel = currentLevel.nextLevel;

  const mainWrapClickHandler = (evt) => {
    let target = evt.target;

    // mainWrap.removeEventListener(`click`, mainWrapClickHandler);
    // window.clearInterval(artistTimerId);

    while (!target.classList.contains(`main-list`)) {
      if (target.classList.contains(`main-answer`)) {
        const answerIndex = target.htmlFor.slice(7);

        currentAnswers.push(currentLevel.answers[answerIndex].isCorrect);
        // console.log(currentAnswers);
        changeLevelScreen(data[nextLevel].type, nextLevel);

        mainWrap.removeEventListener(`click`, mainWrapClickHandler);

        if (currentAnswers.length >= 10) {
          displayScreenResultWin();
        }
      }

      target = target.parentElement;
    }
  };

  mainWrap.addEventListener(`click`, mainWrapClickHandler);


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
