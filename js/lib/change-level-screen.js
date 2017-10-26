import showArtistLevel from '../screens/artist-level';
import showGenreLevel from '../screens/genre-level';
import {data, stateGame} from '../data/data';


const changeLevelScreen = () => {
  const currentLevel = data[stateGame.level];

  if (currentLevel.type === `artist`) {
    showArtistLevel.init();
  }

  if (currentLevel.type === `genre`) {
    showGenreLevel.init();
  }
};

export default changeLevelScreen;
