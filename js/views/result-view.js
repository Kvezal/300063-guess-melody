import AbstractView from './abstract-view';
import calculationOfResults from '../lib/calculationOfResults';
import {initialState, arrayResults} from '../data/data';
import countPoints from '../lib/countPoints';

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
  constructor(state) {
    super();

    this.state = state;
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

  get currentResult() {
    const counterPoints = countPoints(this.state.answers, this.state.lives);
    return {
      points: counterPoints.points,
      numberOfQuickAnswers: counterPoints.numberOfQuickAnswers,
      lives: this.state.lives,
      time: this.state.time,
      timeLeft: initialState.time - this.state.time,
      id: arrayResults.length + 1
    };
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
