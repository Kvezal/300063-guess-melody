import welcomeScreen from './screens/welcome';
import GameScreen from './screens/game';
import resultScreen from './screens/result';
import showArtistLevel from './screens/artist-level';
import showGenreLevel from './screens/genre-level';
import {initialState} from './data/data';
import Loader from './loader';
import SplashScreen from './screens/splash';
import error from './screens/error';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  ARTIST: `artist`,
  GENRE: `genre`,
  RESULT: `result`
};

const saveState = (state) => {
  state = encodeURIComponent(JSON.stringify(state));
  return state;
};

const loadState = (dataString) => {
  try {
    dataString = decodeURIComponent(dataString);
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
      Application.changeHash(id, state);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, state) {
    const controller = this.routes[id];
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
    const controller = this.routes[model.data[model.state.level].type];
    if (controller) {
      controller.init(model);
    }
  }
}

const openPage = () => {
  data.
      then(Application.init).
      catch(error.init);
};

const splash = new SplashScreen();
splash.start();

const data = Loader.loadData();

data.
    then(Loader.loadResourses).
    then((resourses) => Promise.all(resourses)).
    then(openPage).
    catch(error.init);

export default Application;
