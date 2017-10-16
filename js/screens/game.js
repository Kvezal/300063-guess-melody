import getElementFromTemplate from './functions/newDOMElement';

const getArtistAnswerOptions = (answers) => {
  return [...answers].map((item) => {
    return (
      `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
        <label class="main-answer" for="answer-1">
          <img class="main-answer-preview" src="${item.image}"
               alt="${item.artist}" width="134" height="134">
          Пелагея
        </label>
      </div>`
    );
  }).join(``);
};

const artistGame = (level) =>
  getElementFromTemplate(`<h2 class="title main-title">Кто исполняет эту песню?</h2>
  <div class="player-wrapper">
    <div class="player">
      <audio src="${level.question}"></audio>
      <button class="player-control player-control--pause"></button>
      <div class="player-track">
        <span class="player-status"></span>
      </div>
    </div>
  </div>
  <form class="main-list">
    ${getArtistAnswerOptions(level.answers)}
  </form>`);

const getGenreAnswerOptions = (answers) => {
  return [...answers].map((item, index) => {
    const itemIndex = index + 1;
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
        <input type="checkbox" name="answer" value="answer-${itemIndex}" id="a-${itemIndex}">
        <label class="genre-answer-check" for="a-${itemIndex}"></label>
      </div>`
    );
  }).join(``);
};

const genreGame = (level) =>
  getElementFromTemplate(`<h2 class="title">${level.question}</h2>
  <form class="genre">
    ${getGenreAnswerOptions(level.answers)}
    <button class="genre-answer-send" type="submit">Ответить</button>
  </form>`);

export {artistGame, genreGame};
