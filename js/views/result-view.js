import AbstractView from './abstract-view';
import calculationOfResults from '../lib/calculationOfResults';
import {arrayResults} from '../data/data';

const screens = {
  win: {
    title: `Вы настоящий меломан!`
  },
  timeIsOver: {
    title: `Увы и ах!`
  },
  attemptsEnded: {
    title: `Какая жалость!`
  }
};

class ResultView extends AbstractView {
  constructor(currentResult) {
    super();

    this.currentResult = currentResult;
  }

  get template() {
    return (
      `<section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

        <h2 class="title">${screens[this.type].title}</h2>

        ${calculationOfResults(arrayResults, this.currentResult)}

        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`
    );
  }

  get type() {
    if (this.currentResult.time <= 0) {
      return `timeIsOver`;
    }
    if (this.currentResult.lives <= 0) {
      return `attemptsEnded`;
    }
    return `win`;
  }

  bind(element) {
    const buttonReplay = element.querySelector(`.main-replay`);
    buttonReplay.onclick = (evt) => {
      evt.preventDefault();

      this.replayHandler();
    };
  }

  init() {

  }

  replayHandler() {

  }
}

export default ResultView;
