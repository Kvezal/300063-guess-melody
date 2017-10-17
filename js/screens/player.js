import displayAmountMistakes from './displayAmountMistakes';
import displayTimer from './displayTimer';

const player = (state) => {
  const playerTemplate =
    `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml"></div>
    </svg>
    <div class="main-mistakes"></div>`;

  const mainWrap = document.querySelector(`.main-wrap`);
  mainWrap.insertAdjacentHTML(`beforeBegin`, playerTemplate);

  displayTimer();
  displayAmountMistakes(state.lives);
};

export default player;
