import getElementFromTemplate from './functions/newDOMElement';
import {displayElement} from './functions/screenRender';
import getTimer from './timer';
import {initialState} from './data';

import displayScreenResult from './result';

const displayTimer = () => {
  const timer = getTimer(initialState.time);

  const timerValue = document.querySelector(`.timer-value`);

  initialState.timerId = window.setInterval(() => {
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
      displayScreenResult(`timeIsOver`);
    }
  });
};

export default displayTimer;
