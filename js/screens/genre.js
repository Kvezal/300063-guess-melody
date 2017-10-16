import getElementFromTemplate from './functions/newDOMElement';
import {displayElement} from './functions/screenRender';
import changeLevelScreen from './changeLevelScreen';
import {data, currentAnswers} from './data';

import displayScreenResultWin from './result-win';

const getGenreAnswerOptions = (answers) => {
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
};

const genreGame = (level) =>
  getElementFromTemplate(`<h2 class="title">${level.question}</h2>
  <form class="genre">
    ${getGenreAnswerOptions(level.answers)}
    <button class="genre-answer-send" type="submit">Ответить</button>
  </form>`);

const getCheckedFormElement = (list, level) => {
  const result = [];

  Array.prototype.forEach.call(list, (it, index) => {
    if (it.checked) {
      result.push(data[level].answers[index].isCorrect === it.checked);
    }
    return false;
  });

  return result;
};

const displayScreenGenre = (level) => {
  const mainWrap = document.querySelector(`.main-wrap`);

  displayElement(genreGame(data[level]), mainWrap);

  const currentLevel = data[level];
  const nextLevel = currentLevel.nextLevel;

  const formGenre = document.querySelector(`.genre`);

  const formGenreSubmitHandler = (evt) => {
    evt.preventDefault();

    const answersList = document.querySelectorAll(`input[name="answer"]`);

    const checkedFormElement = getCheckedFormElement(answersList, level);

    if (checkedFormElement.length) {
      currentAnswers.push(checkedFormElement.every((it) => it));
      // console.log(currentAnswers);
      changeLevelScreen(data[nextLevel].type, nextLevel);

      formGenre.removeEventListener(`submit`, formGenreSubmitHandler);

      if (currentAnswers.length >= 10) {
        displayScreenResultWin();
      }
    }
  };

  formGenre.addEventListener(`submit`, formGenreSubmitHandler);
};

export default displayScreenGenre;
