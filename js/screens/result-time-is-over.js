import getElementFromTemplate from './functions/newDOMElement';
import displayScreen from './functions/screenRender';
import screenWelcome from './welcome';

const markupScreenResultTimeIsOver = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const screenResultTimeIsOver = getElementFromTemplate(markupScreenResultTimeIsOver);

const buttonReplay = screenResultTimeIsOver.querySelector(`.main-replay`);

const buttonReplayClickHandler = (evt) => {
  evt.preventDefault();
  displayScreen(screenWelcome);
};

buttonReplay.addEventListener(`click`, buttonReplayClickHandler);

export default screenResultTimeIsOver;
