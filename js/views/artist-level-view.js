import AbstractView from './abstract-view';
import {data} from '../data/data';

class ArtistLevelView extends AbstractView {
  constructor(state) {
    super();

    this.state = state;
  }

  get template() {
    const currentLevel = data[this.state.level];

    return (
      `<h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${currentLevel.question}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${this.getArtistAnswerOptions(currentLevel.answers)}
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

  bind(element) {
    const playerControl = element.querySelector(`.player-control`);
    playerControl.onclick = (evt) => this.playerControlClickHandler(evt);

    const radioBtns = element.querySelectorAll(`.main-answer`);
    Array.prototype.forEach.call(radioBtns, (it) => {
      it.onclick = (evt) => this.answerHandler(evt);
    });
  }

  answerHandler() {

  }

  playerControlClickHandler() {

  }
}

export default ArtistLevelView;
