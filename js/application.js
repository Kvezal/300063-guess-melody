import welcomeScreen from './screens/welcome';
import gameScreen from './screens/game';
import resultScreen from './screens/result';
import showArtistLevel from './screens/artist-level';
import showGenreLevel from './screens/genre-level';
import {data, initialState} from './data/data';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  ARTIST: `artist`,
  GENRE: `genre`,
  RESULT: `result`
};

const saveState = (state) => {
  return JSON.stringify(state);
};

const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (err) {
    return initialState;
  }
};

const routes = {
  [ControllerId.WELCOME]: welcomeScreen,
  [ControllerId.GAME]: gameScreen,
  [ControllerId.ARTIST]: showArtistLevel,
  [ControllerId.GENRE]: showGenreLevel,
  [ControllerId.RESULT]: resultScreen
};

class Application {
  static init() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, state] = hashValue.split(`?`);
      this.changeHash(id, state);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, state) {
    const controller = routes[id];
    if (controller) {
      controller.init(loadState(state));
    }
  }

  static showWelcome() {
    location.hash = ControllerId.WELCOME;
  }

  static showGame(state = initialState) {
    location.hash = `${ControllerId.GAME}?${saveState(state)}`;
  }

  static showResult(state) {
    location.hash = `${ControllerId.RESULT}?${saveState(state)}`;
  }

  static changeLevel(state) {
    const controller = routes[data[state.level].type];
    if (controller) {
      controller.init(state);
    }
  }
}

export default Application;
