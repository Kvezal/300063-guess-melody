import displayScreenArtist from './artist';
import displayScreenGenre from './genre';

const changeLevelScreen = (type, timerId) => {
  if (type === `artist`) {
    displayScreenArtist(timerId);
  }

  if (type === `genre`) {
    displayScreenGenre(timerId);
  }
};

export default changeLevelScreen;
