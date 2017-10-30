const getElementFromTemplate = (markup) => {
  const containerForNewHTMLElement = document.createElement(`template`);
  containerForNewHTMLElement.innerHTML = markup;
  return containerForNewHTMLElement.content;
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

export {getElementFromTemplate, displayScreen, displayElement, playSong, stopSong};
