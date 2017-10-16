import getTimer from './timer';

const getAmountMistakesTemplate = (amountMistakes) => {
  let amountMistakesTemplate = ``;

  for (let i = 0; i < amountMistakes; i++) {
    amountMistakesTemplate += `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49"> `;
  }

  return amountMistakesTemplate;
};

const getTimerTemplate = (timer) => {
  let minutes = timer.minutes;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let seconds = timer.seconds;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return (
    `<span class="timer-value-mins">${minutes}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${seconds}</span>`
  );
};

let playerTimer;

const player = (state) => {
  playerTimer = getTimer(state.time);

  const mainWrap = document.querySelector(`.main-wrap`);

  const playerTemplate =
    `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        ${getTimerTemplate(playerTimer)}
      </div>
    </svg>
    <div class="main-mistakes">
      ${getAmountMistakesTemplate(state.lives)}
    </div>`;

  mainWrap.insertAdjacentHTML(`beforeBegin`, playerTemplate);
};

export default player;
