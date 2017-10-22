import AbstractView from '../../abstract-view';

class LevelView extends AbstractView {
  constructor(level) {
    super();

    this.level = level;
  }

  get template() {
    if (this.level.type === `artist`) {
      return this.artistTemplate;
    }

    if (this.level.type === `genre`) {
      return this.genreTemplate;
    }

    return -1;
  }

  get artistTemplate() {
    return (
      `<h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${this.level.question}" autoplay></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${this.getArtistAnswerOptions(this.level.answers)}
      </form>`
    );
  }

  get genreTemplate() {
    return (
      `<h2 class="title">${this.level.question}</h2>
      <form class="genre">
        ${this.getGenreAnswerOptions(this.level.answers)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>`
    );
  }

  getArtistAnswerOptions(answers) {
    return [...answers].map((item, index) => {
      return (
        `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}"/>
          <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${item.image}"
                 alt="${item.artist}" width="134" height="134">
            ${item.artist}
          </label>
        </div>`
      );
    }).join(``);
  }

  getGenreAnswerOptions(answers) {
    return [...answers].map((item, index) => {
      return (
        `<div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${item.src}"></audio>
              <button class="player-control player-control--pause"></button>
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
    if (this.level.type === `artist`) {
      const radioBtns = element.querySelectorAll(`.main-answer`);
      Array.prototype.forEach.call(radioBtns, (it) => {
        it.onclick = (evt) => {
          this.answerHandler(evt);
        };
      });
    }

    if (this.level.type === `genre`) {
      const answerForm = element.querySelector(`.genre`);
      answerForm.addEventListener(`submit`, this.answerHandler);
    }
  }

  init() {

  }

  answerHandler() {

  }
}

export default LevelView;
