import App from '../application';
import {initialState} from '../data/data';

const getElementFromTemplate = (markup) => {
  const containerForNewHTMLElement = document.createElement(`template`);
  containerForNewHTMLElement.innerHTML = markup;
  return containerForNewHTMLElement.content;
};

const displayAmountMistakes = (state, amountLives) => {
  if (amountLives < 0) {
    App.showResult(state);
    return;
  }
  const mainMistakes = document.querySelector(`.main-mistakes`);
  const amountMistakes = initialState.lives - amountLives;
  let amountMistakesTemplate = ``;
  for (let i = 0; i < amountMistakes; i++) {
    amountMistakesTemplate += `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49"> `;
  }
  displayElement(getElementFromTemplate(amountMistakesTemplate), mainMistakes);
};

const pushCurrentAnswer = (state, answer, time) => {
  time = (new Date() - time) / 1000;
  state.answers.push({answer, time});
};

const appDisplay = document.querySelector(`.app`);

const clearDisplay = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const displayElement = (element, parent) => {
  clearDisplay(parent);
  parent.appendChild(element);
};

const displayScreen = (screen) => {
  displayElement(screen, appDisplay);
};

const playSong = (element) => {
  element.classList.add(`player-control--pause`);
  element.classList.remove(`player-control--play`);
  element.parentElement.querySelector(`audio`).play();
};

const stopSong = (element) => {
  element.classList.remove(`player-control--pause`);
  element.classList.add(`player-control--play`);
  element.parentElement.querySelector(`audio`).pause();
};

export {getElementFromTemplate, displayAmountMistakes, pushCurrentAnswer, displayScreen, displayElement, playSong, stopSong};
