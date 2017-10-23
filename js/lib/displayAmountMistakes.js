import getElementFromTemplate from './newDOMElement';
import {displayScreen, displayElement} from './screenRender';
import showResult from '../screens/result/result';

const displayAmountMistakes = (amountMistakes) => {
  if (!amountMistakes) {
    displayScreen(showResult().element);
    return;
  }

  const mainMistakes = document.querySelector(`.main-mistakes`);

  let amountMistakesTemplate = ``;

  for (let i = 0; i < amountMistakes; i++) {
    amountMistakesTemplate += `<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49"> `;
  }

  displayElement(getElementFromTemplate(amountMistakesTemplate), mainMistakes);
};

export default displayAmountMistakes;
