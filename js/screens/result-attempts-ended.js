import getElementFromTemplate from './functions/newDOMElement';
import displayScreen from './functions/screenRender';
import screenWelcome from './welcome';

const markupScreenResultAttemptsEnded = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const screenResultAttemptsEnded = getElementFromTemplate(markupScreenResultAttemptsEnded);

const buttonReplay = screenResultAttemptsEnded.querySelector(`.main-replay`);

const buttonReplayClickHandler = (evt) => {
  evt.preventDefault();
  displayScreen(screenWelcome);
};

buttonReplay.addEventListener(`click`, buttonReplayClickHandler);

export default screenResultAttemptsEnded;
