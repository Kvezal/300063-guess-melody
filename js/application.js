import welcomeScreen from './screens/welcome';
import gameScreen from './screens/game';
import resultScreen from './screens/result';
import showArtistLevel from './screens/artist-level';
import showGenreLevel from './screens/genre-level';
import {data} from './data/data';

class Application {
  static showWelcome() {
    welcomeScreen.init();
  }

  static showGame() {
    gameScreen.init();
  }

  static showResult(state) {
    resultScreen.init(state);
  }

  static changeLevel(state) {
    const currentLevel = data[state.level];

    if (currentLevel.type === `artist`) {
      showArtistLevel.init(state);
    }

    if (currentLevel.type === `genre`) {
      showGenreLevel.init(state);
    }
  }
}

export default Application;
