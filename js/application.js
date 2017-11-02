import welcomeScreen from './screens/welcome';
import GameScreen from './screens/game';
import resultScreen from './screens/result';
import showArtistLevel from './screens/artist-level';
import showGenreLevel from './screens/genre-level';
import Loader from './loader';
import SplashScreen from './screens/splash';
import error from './screens/error';
import {getCurrentResult} from './lib/utils';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  ARTIST: `artist`,
  GENRE: `genre`,
  RESULT: `result`
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

    Application.showWelcome();
  }

  static changeHash(id) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init();
    }
  }

  static showWelcome() {
    Application.routes[ControllerId.WELCOME].init();
  }

  static showGame(state) {
    Application.routes[ControllerId.GAME].init(state);
  }

  static showResult(state) {
    window.clearInterval(state.timerId);

    let listResults = [];
    const currentResult = getCurrentResult(state);

    if (state.answers.length < 10) {
      Application.routes[ControllerId.RESULT].init(currentResult, listResults);
      return;
    }

    const findCurrentResult = (arrayResults) => {
      listResults = arrayResults;
      return currentResult;
    };

    if (state.answers.length === 10) {
      splash.start();
      Loader.loadResults().
          then(findCurrentResult).
          then(Loader.saveResults).
          then(() => {
            Application.routes[ControllerId.RESULT].init(currentResult, listResults);
          }).
          catch(error.init);
    }
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
    then(openPage).
    catch(error.init);

export default Application;
