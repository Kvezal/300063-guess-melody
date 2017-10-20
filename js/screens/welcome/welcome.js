/* import getElementFromTemplate from '../functions/newDOMElement';
import {displayScreen} from '../functions/screenRender';
import displayScreenGame from '../game';

import {currentState} from '../data';

const markupScreenWelcome = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;

const displayScreenWelcome = () => {
  const screenWelcome = getElementFromTemplate(markupScreenWelcome);

  const buttonPlay = screenWelcome.querySelector(`.main-play`);

  const buttonPlayClickHandler = (evt) => {
    evt.preventDefault();

    buttonPlay.removeEventListener(`click`, buttonPlayClickHandler);

    displayScreenGame(currentState);
  };

  buttonPlay.addEventListener(`click`, buttonPlayClickHandler);

  displayScreen(screenWelcome);
};

displayScreenWelcome();

export default displayScreenWelcome;*/

import WelcomeView from './welcome-view';
import displayScreenGame from '../game';
import {currentState} from '../data';

const welcome = new WelcomeView();
welcome.startHandler = () => {
  displayScreenGame(currentState);
};

export default () => welcome;
