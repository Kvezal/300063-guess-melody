import welcomeScreen from './screens/welcome-screen';
import GameScreen from './screens/game-screen';
import resultScreen from './screens/result-screen';
import Loader from './loader';
import SplashScreen from './screens/splash-screen';
import error from './screens/error-screen';
import Utils from './lib/utils';
import {GameParameters} from './data/data';

const ControllerId = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`
};

class Application {
  static init(gameData) {
    Application.routes = {
      [ControllerId.WELCOME]: welcomeScreen,
      [ControllerId.GAME]: new GameScreen(gameData),
      [ControllerId.RESULT]: resultScreen
    };

    Application.showWelcome();
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
    const currentResult = Utils.getCurrentResult(state);

    if (state.answers.length < GameParameters.NUMBER_ANSWERS) {
      Application.routes[ControllerId.RESULT].init(currentResult, listResults);
      return;
    }

    const findCurrentResult = (arrayResults) => {
      listResults = arrayResults;
      return currentResult;
    };

    if (state.answers.length === GameParameters.NUMBER_ANSWERS) {
      splash.start();
      Loader.loadResults().
          then(findCurrentResult).
          then(Loader.saveResults).
          then(() => {
            Application.routes[ControllerId.RESULT].init(currentResult, listResults);
          }).
          catch(error.show);
    }
  }
}

const openPage = () => {
  data.
      then(Application.init).
      catch(error.show);
};

const splash = new SplashScreen();
splash.start();

const data = Loader.loadData();

data.
    then(Loader.loadResourses).
    then(openPage).
    catch(error.show);

export default Application;
