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

  static async prepareDataAndInit() {

    const openPage = (data) => {
      Application.init(data);
    };

    try {
      const data = await Loader.loadData();
      await Loader.loadResourses(data);
      openPage(data);
    } catch (err) {
      error.show(err);
    }
  }

  static showWelcome() {
    Application.routes[ControllerId.WELCOME].init();
  }

  static showGame(state) {
    Application.routes[ControllerId.GAME].init(state);
  }

  static async showResult(state) {
    window.clearInterval(state.timerId);

    let listResults = [];
    const currentResult = Utils.getCurrentResult(state);

    if (state.answers.length < GameParameters.NUMBER_ANSWERS) {
      Application.routes[ControllerId.RESULT].init(currentResult, listResults);
      return;
    }

    if (state.answers.length === GameParameters.NUMBER_ANSWERS) {
      splash.start();
      try {
        listResults = await Loader.loadResults();
        await Loader.saveResults(currentResult);
        Application.routes[ControllerId.RESULT].init(currentResult, listResults);
      } catch (err) {
        error.show(err);
      }
    }
  }
}

const splash = new SplashScreen();
splash.start();

Application.prepareDataAndInit();

export default Application;
