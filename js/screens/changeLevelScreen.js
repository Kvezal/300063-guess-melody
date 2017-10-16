import displayScreenArtist from './artist';
import displayScreenGenre from './genre';

const changeLevelScreen = (type, level) => {
  if (type === `artist`) {
    displayScreenArtist(level);
  }

  if (type === `genre`) {
    displayScreenGenre(level);
  }
};

export default changeLevelScreen;
