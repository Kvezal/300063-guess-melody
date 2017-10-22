import {displayScreen} from '../functions/screenRender';
import showWelcome from '../welcome/welcome';

const addButtonReplayListener = () => {
  const buttonReplay = document.querySelector(`.main-replay`);

  const buttonReplayClickHandler = (evt) => {
    evt.preventDefault();

    buttonReplay.removeEventListener(`click`, buttonReplayClickHandler);

    displayScreen(showWelcome().element);
  };

  buttonReplay.addEventListener(`click`, buttonReplayClickHandler);
};

export default addButtonReplayListener;
