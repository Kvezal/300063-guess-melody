/* import getElementFromTemplate from '../functions/newDOMElement';
import {displayScreen} from '../functions/screenRender';
import changeLevelScreen from './changeLevelScreen';
import {data, currentAnswers} from '../data';

import displayAmountMistakes from './displayAmountMistakes';
import displayTimer from './displayTimer';

const markupScreenGame =
  `<section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes"></div>
    <div class="main-wrap"></div>
  </section>`;

const displayScreenGame = (state) => {
  const screenGame = getElementFromTemplate(markupScreenGame);
  displayScreen(screenGame);

  currentAnswers.splice(0, 10);

  displayTimer();
  displayAmountMistakes(state.lives);

  changeLevelScreen(data[state.level].type);
};

export default displayScreenGame;*/

import GameView from './game-view';
import {currentState, currentAnswers} from '../data';
import displayAmountMistakes from '../displayAmountMistakes';
import displayTimer from '../displayTimer';
// import changeLevelScreen from '../changeLevelScreen';
import showLevel from './level';

const game = new GameView();
game.init = () => {
  currentAnswers.splice(0, 10);
  displayTimer();
  displayAmountMistakes(currentState.lives);
  // changeLevelScreen(data[currentState.level].type);

  showLevel().init();
};

export default () => game;
