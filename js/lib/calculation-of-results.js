import {initialState, GameParameters} from '../data/data';

const PERCENTAGES = 100;

const calculationOfResults = (arrayResults, currentResult) => {
  if (currentResult.time <= GameParameters.MIN_COUNT_TIME) {
    return `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;
  }

  if (currentResult.lives < GameParameters.MIN_COUNT_LIVES) {
    return `<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;
  }

  arrayResults.sort((left, right) => {
    const result = right.points - left.points;
    if (!result) {
      return right.time - left.time;
    }
    return result;
  });
  const numberOfPlayers = arrayResults.length;

  const placeOfPlayer = arrayResults.findIndex((item) => {
    return item.id === currentResult.id;
  }) + 1;

  const betterThanOtherPlayer = (numberOfPlayers - placeOfPlayer) * PERCENTAGES / numberOfPlayers;
  const mistakes = initialState.lives - currentResult.lives;
  const minutes = Math.floor(currentResult.timeLeft / GameParameters.COUNT_OF_SECONDS_IN_MINUTE);
  const seconds = currentResult.timeLeft % GameParameters.COUNT_OF_SECONDS_IN_MINUTE;

  return (
    `<div class="main-stat">За&nbsp;${minutes}&nbsp;минуты и ${seconds}&nbsp;секунд
      <br>вы&nbsp;набрали ${currentResult.points} баллов (${currentResult.numberOfQuickAnswers} быстрых)
      <br>совершив ${mistakes} ошибки
    </div>
    <span class="main-comparison">Вы заняли ${placeOfPlayer}-е место из ${numberOfPlayers} игроков. Это&nbsp;лучше чем у&nbsp;${betterThanOtherPlayer}%&nbsp;игроков</span>`
  );
};

export default calculationOfResults;
