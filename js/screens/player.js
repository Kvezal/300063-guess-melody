import timer from './timer';

const getAmountMistakesTemplate = (amountMistakes) => {
  let amountMistakesTemplate = ``;

  for (let i = 0; i < amountMistakes; i++) {
    amountMistakesTemplate += `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49"> `;
  }

  return amountMistakesTemplate;
};

const getTimerTemplate = () => {
  let minutes = playerTimer.minutes;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let seconds = playerTimer.seconds;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return (
    `<span class="timer-value-mins">${minutes}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${seconds}</span>`
  );
};

const playerTimer = timer(300);

const player =
  `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      ${getTimerTemplate()}
    </div>
  </svg>
  <div class="main-mistakes">
    ${getAmountMistakesTemplate(3)}
  </div>`;

export default player;
