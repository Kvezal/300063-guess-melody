import AbstractView from './abstract-view';

class GenreLevelView extends AbstractView {
  constructor(gameView) {
    super();

    this.answerHandler = gameView.genreLevel.answerHandler;
    this.playerControlClickHandler = gameView.genreLevel.playerControlClickHandler;
    this.currentLevel = gameView.model.currentLevel;
    this._answers = this.currentLevel.answers;
  }

  get template() {
    return (
      `<h2 class="title">${this.currentLevel.question}</h2>
      <form class="genre">
        ${this.genreAnswerOptions}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>`
    );
  }

  get genreAnswerOptions() {
    return [...this._answers].map((item, index) => {
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
}

export default GenreLevelView;
