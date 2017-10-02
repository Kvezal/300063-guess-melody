const appDisplay = document.querySelector(`.app .main`);

const clearDisplay = () => {
  while (appDisplay.firstChild) {
    appDisplay.removeChild(appDisplay.firstChild);
  }
};

const renderDisplay = (screen) => {
  clearDisplay();
  appDisplay.appendChild(screen);
};

export default renderDisplay;
