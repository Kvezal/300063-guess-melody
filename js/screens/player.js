import getElementFromTemplate from './functions/newDOMElement';
import {displayElement} from './functions/screenRender';
import getTimer from './timer';

import displayScreenResultTimeIsOver from './result-time-is-over';

const getAmountMistakesTemplate = (amountMistakes) => {
  let amountMistakesTemplate = ``;

  for (let i = 0; i < amountMistakes; i++) {
    amountMistakesTemplate += `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49"> `;
  }

  return amountMistakesTemplate;
};

const displayTimer = (timer) => {
  const timerValue = document.querySelector(`.timer-value`);

  window.timer = window.setInterval(() => {
    let minutes = timer.minutes;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let seconds = timer.seconds;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    const timerTemplate =
      `<span class="timer-value-mins">${minutes}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${seconds}</span>`;

    displayElement(getElementFromTemplate(timerTemplate), timerValue);
    if (timer.state) {
      displayScreenResultTimeIsOver();
    }
  });
};

const player = (state) => {
  const playerTimer = getTimer(state.time);

  const playerTemplate =
    `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml"></div>
    </svg>
    <div class="main-mistakes">
      ${getAmountMistakesTemplate(state.lives)}
    </div>`;

  const mainWrap = document.querySelector(`.main-wrap`);
  mainWrap.insertAdjacentHTML(`beforeBegin`, playerTemplate);

  displayTimer(playerTimer);
};

//const player = (state) => {
//  playerTimer = getTimer(state.time);
//
//  const playerTemplate =
//    `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
//      <circle
//        cx="390" cy="390" r="370"
//        class="timer-line"
//        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
//
//      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml"></div>
//    </svg>
//    <div class="main-mistakes">
//      ${getAmountMistakesTemplate(state.lives)}
//    </div>`;
//
//  const mainWrap = document.querySelector(`.main-wrap`);
//  mainWrap.insertAdjacentHTML(`beforeBegin`, playerTemplate);
//
//  const timerValue = document.querySelector(`.timer-value`);
//
//  displayElement(getTimerTemplateMarkup(playerTimer), timerValue);
//};

export default player;
