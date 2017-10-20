import AbstractView from '../../abstract-view';

const ENTER_KEYCODE = 13;

class WelcomeView extends AbstractView {
  get template() {
    return (
      `<section class="main main--welcome">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
          Ошибиться можно 3 раза.<br>
          Удачи!
        </p>
      </section>`
    );
  }

  bind(element) {
    const buttonPlay = element.querySelector(`.main-play`);

    buttonPlay.onclick = (evt) => {
      evt.preventDefault();
      this.startHandler();
    };

    buttonPlay.onkeydown = (evt) => {
      if (evt.keyCode === ENTER_KEYCODE) {
        this.startHandler();
      }
    };
  }

  startHandler() {

  }

}

export default WelcomeView;
