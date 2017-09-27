(function () {
  const KEY_CODES = {
    ALT: 18,
    ARROW_RIGHT: 39,
    ARROW_LEFT: 37
  };

  const templates = document.querySelector(`#templates`).content;
  const resultScreens = templates.querySelectorAll(`.main--result`);

  const SCREENS = [
    templates.querySelector(`.main--welcome`),
    templates.querySelector(`.main--level-artist`),
    templates.querySelector(`.main--level-genre`)
  ];

  Array.prototype.forEach.call(resultScreens, (item) => SCREENS.push(item));

  const appDisplay = document.querySelector(`.app .main`);

  const clearDisplay = () => {
    while (appDisplay.firstChild) {
      appDisplay.removeChild(appDisplay.firstChild);
    }
  };

  const renderDisplay = (screen) => {
    appDisplay.appendChild(screen);
  };

  const documentKeyPressHandler = (evt) => {
    if (evt.keyCode === KEY_CODES.ALT) {
      document.addEventListener(`keydown`, documentKeyDownHandler);
      document.addEventListener(`keyup`, documentKeyUpHandler);
    }
  };

  const documentKeyDownHandler = (evt) => {
    const key = evt.keyCode;

    if (key === KEY_CODES.ARROW_LEFT) {
      screenIndex--;
    }
    if (key === KEY_CODES.ARROW_RIGHT) {
      screenIndex++;
    }

    if (key === KEY_CODES.ARROW_LEFT || key === KEY_CODES.ARROW_RIGHT) {
      evt.preventDefault();

      if (screenIndex < 0) {
        screenIndex = 0;
        return;
      }
      if (screenIndex >= SCREENS.length) {
        screenIndex = SCREENS.length - 1;
        return;
      }

      clearDisplay();
      renderDisplay(SCREENS[screenIndex]);
    }
  };

  const documentKeyUpHandler = (evt) => {
    if (evt.keyCode === KEY_CODES.ALT) {
      document.removeEventListener(`keyup`, documentKeyDownHandler);
    }
  };

  let screenIndex = 0;
  renderDisplay(SCREENS[screenIndex]);
  document.addEventListener(`keydown`, documentKeyPressHandler);
})();
