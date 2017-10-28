import AbstractView from './abstract-view';
import {data} from '../data/data';

class GenreLevelView extends AbstractView {
  constructor(state) {
    super();

    this.state = state;
  }

  get template() {
    const currentLevel = data[this.state.level];

    return (
      `<h2 class="title">${currentLevel.question}</h2>
      <form class="genre">
        ${this.getGenreAnswerOptions(currentLevel.answers)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>`
    );
  }

  getGenreAnswerOptions(answers) {
    return [...answers].map((item, index) => {
      return (
        `<div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${item.src}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-${index}" id="a-${index}">
          <label class="genre-answer-check" for="a-${index}"></label>
        </div>`
      );
    }).join(``);
  }

  bind(element) {
    const answerForm = element.querySelector(`.genre`);
    answerForm.addEventListener(`submit`, this.answerHandler);

    const listOfPlayerControls = element.querySelectorAll(`.player-control`);
    Array.prototype.forEach.call(listOfPlayerControls, (item) => {
      item.addEventListener(`click`, this.playerControlClickHandler);
    });
  }

  answerHandler() {

  }

  playerControlClickHandler() {

  }
}

export default GenreLevelView;
