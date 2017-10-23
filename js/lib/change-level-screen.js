import showArtistLevel from '../screens/levels/artist-level';
import showGenreLevel from '../screens/levels/genre-level';
import {displayElement} from './screenRender';
import {data, stateGame} from '../data/data';


const changeLevelScreen = () => {
  const mainWrap = document.querySelector(`.main-wrap`);
  const currentLevel = data[stateGame.level];

  if (currentLevel.type === `artist`) {
    displayElement(showArtistLevel().element, mainWrap);
  }

  if (currentLevel.type === `genre`) {
    displayElement(showGenreLevel().element, mainWrap);
  }
};

export default changeLevelScreen;
