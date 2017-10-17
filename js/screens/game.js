import getElementFromTemplate from './functions/newDOMElement';
import {displayScreen} from './functions/screenRender';
import changeLevelScreen from './changeLevelScreen';
import player from './player';
import {data, currentAnswers} from './data';

const markupScreenGame =
  `<section class="main main--level main--level-artist">
    <div class="main-wrap"></div>
  </section>`;

const displayScreenGame = (state) => {
  const screenGame = getElementFromTemplate(markupScreenGame);
  displayScreen(screenGame);

  currentAnswers.splice(0, 10);

  player(state);
  changeLevelScreen(data[state.level].type);
};

export default displayScreenGame;
