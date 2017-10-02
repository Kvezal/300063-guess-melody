import getElementFromTemplate from './functions/newDOMElement';
import displayScreen from './functions/screenRender';
import screenArtist from './artist';

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

const screenWelcome = getElementFromTemplate(markupScreenWelcome);

const buttonPlay = screenWelcome.querySelector(`.main-play`);

const buttonPlayClickHandler = (evt) => {
  evt.preventDefault();
  displayScreen(screenArtist);
};

buttonPlay.addEventListener(`click`, buttonPlayClickHandler);

displayScreen(screenWelcome);

export default screenWelcome;
