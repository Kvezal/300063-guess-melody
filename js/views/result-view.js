import AbstractView from './abstract-view';
import calculationOfResults from '../lib/calculationOfResults';
import {stateGame, arrayResults} from '../data/data';
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
  constructor() {
    super();
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
    const counterPoints = countPoints(stateGame.answers, stateGame.lives);
    return {
      points: counterPoints.points,
      numberOfQuickAnswers: counterPoints.numberOfQuickAnswers,
      lives: stateGame.lives,
      time: stateGame.timer.time,
      timeLeft: stateGame.time - stateGame.timer.time,
      id: arrayResults.length + 1
    };
  }

  get element() {
    this.init();
    const currentElement = this.render();
    this.bind(currentElement);
    return currentElement;
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
