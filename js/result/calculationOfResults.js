import {initialState} from '../screens/data';

const calculationOfResults = (arrayResults, currentResult) => {
  const arrayResultsClone = arrayResults.slice();

  if (currentResult.time <= 0) {
    return `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;
  }

  if (currentResult.lives <= 0) {
    return `<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;
  }

  arrayResultsClone.push(currentResult);

  arrayResultsClone.sort((left, right) => left.points - right.points);

  const numberOfPlayers = arrayResultsClone.length;

  let placeOfPlayer;

  arrayResultsClone.forEach((item, index) => {
    if (item.id === currentResult.id) {
      placeOfPlayer = numberOfPlayers - index;
    }
  });

  const betterThanOtherPlayer = (1 - placeOfPlayer / numberOfPlayers) * 100;
  const mistakes = initialState.lives - currentResult.lives;
  const minutes = Math.floor(currentResult.timeLeft / 60);
  const seconds = currentResult.timeLeft % 60;

  return (
    `<div class="main-stat">За&nbsp;${minutes}&nbsp;минуты и ${seconds}&nbsp;секунд
      <br>вы&nbsp;набрали ${currentResult.points} баллов (${currentResult.numberOfQuickAnswers} быстрых)
      <br>совершив ${mistakes} ошибки
    </div>
    <span class="main-comparison">Вы заняли ${placeOfPlayer}-е место из ${numberOfPlayers} игроков. Это&nbsp;лучше чем у&nbsp;${betterThanOtherPlayer}%&nbsp;игроков</span>`
  );
};

export default calculationOfResults;
