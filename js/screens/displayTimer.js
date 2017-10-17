import getElementFromTemplate from './functions/newDOMElement';
import {displayElement} from './functions/screenRender';
import getTimer from './timer';
import {currentState} from './data';

import displayScreenResult from './result';

const displayTimer = () => {
  getTimer();

  const timerValue = document.querySelector(`.timer-value`);

  currentState.timerId = window.setInterval(() => {
    let minutes = currentState.timer.minutes;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let seconds = currentState.timer.seconds;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    const timerTemplate =
      `<span class="timer-value-mins">${minutes}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${seconds}</span>`;

    displayElement(getElementFromTemplate(timerTemplate), timerValue);
    if (currentState.timer.state) {
      displayScreenResult(`timeIsOver`);
    }
  });
};

export default displayTimer;
