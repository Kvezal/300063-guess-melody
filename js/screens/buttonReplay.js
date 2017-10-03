import displayScreenWelcome from './welcome';

const addButtonReplayListener = () => {
  const buttonReplay = document.querySelector(`.main-replay`);

  const buttonReplayClickHandler = (evt) => {
    evt.preventDefault();

    buttonReplay.removeEventListener(`click`, buttonReplayClickHandler);

    displayScreenWelcome();
  };

  buttonReplay.addEventListener(`click`, buttonReplayClickHandler);
};

export default addButtonReplayListener;
