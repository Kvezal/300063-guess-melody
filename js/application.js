import welcomeScreen from './screens/welcome';
import GameScreen from './screens/game';
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

class Application {
  static init(gameData) {
    Application.routes = {
      [ControllerId.WELCOME]: welcomeScreen,
      [ControllerId.GAME]: new GameScreen(gameData),
      [ControllerId.ARTIST]: showArtistLevel,
      [ControllerId.GENRE]: showGenreLevel,
      [ControllerId.RESULT]: resultScreen
    };

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, state] = hashValue.split(`?`);
      this.changeHash(id, state);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, state) {
    const controller = Application.routes[id];
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

  static changeLevel(model) {
    const controller = Application.routes[data[model.state.level].type];
    if (controller) {
      controller.init(model);
    }
  }
}

Application.init(data);

export default Application;
