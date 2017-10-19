import getElementFromTemplate from './functions/newDOMElement';
import {displayElement} from './functions/screenRender';
import displayScreenResult from './result';

const displayAmountMistakes = (amountMistakes) => {
  if (!amountMistakes) {
    displayScreenResult(`attemptsEnded`);
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
