import getElementFromTemplate from './functions/newDOMElement';
import {displayElement} from './functions/screenRender';
import changeLevelScreen from './changeLevelScreen';
import {initialState, data, currentAnswers} from './data';
import pushCurrentAnswer from './pushCurrentAnswer';

import displayScreenResult from './result';
import displayAmountMistakes from './displayAmountMistakes';

const getArtistAnswerOptions = (answers) => {
  return [...answers].map((item, index) => {
    return (
      `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}"/>
        <label class="main-answer" for="answer-${index}">
          <img class="main-answer-preview" src="${item.image}"
               alt="${item.artist}" width="134" height="134">
          ${item.artist}
        </label>
      </div>`
    );
  }).join(``);
};

const artistGame = (level) =>
  getElementFromTemplate(`<h2 class="title main-title">Кто исполняет эту песню?</h2>
  <div class="player-wrapper">
    <div class="player">
      <audio src="${level.question}" autoplay></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <form class="main-list">
    ${getArtistAnswerOptions(level.answers)}
  </form>`);

const displayScreenArtist = () => {
  const mainWrap = document.querySelector(`.main-wrap`);

  displayElement(artistGame(data[initialState.level]), mainWrap);

  const currentLevel = data[initialState.level];
  initialState.level = currentLevel.nextLevel;

  let time = new Date();

  const mainWrapClickHandler = (evt) => {
    let target = evt.target;

    while (!target.classList.contains(`main-list`)) {
      if (target.classList.contains(`main-answer`)) {
        const answerIndex = target.htmlFor.slice(7);
        const answer = currentLevel.answers[answerIndex].isCorrect;

        mainWrap.removeEventListener(`click`, mainWrapClickHandler);

        changeLevelScreen(data[initialState.level].type);

        pushCurrentAnswer(answer, time);

        if (!answer) {
          displayAmountMistakes(--initialState.lives);
        }

        if (currentAnswers.length >= 10) {
          displayScreenResult(`win`);
        }
      }

      target = target.parentElement;
    }
  };

  mainWrap.addEventListener(`click`, mainWrapClickHandler);
};

export default displayScreenArtist;
