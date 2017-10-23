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

export {displayScreen, displayElement};
