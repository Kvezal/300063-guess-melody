const calculationOfResults = (arrayResults, currentResult) => {
  if (currentResult.timeLeft <= 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (currentResult.lives < 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  arrayResults.push(currentResult);

  arrayResults.sort((left, right) => left.points - right.points);

  const numberOfPlayers = arrayResults.length;

  let placeOfPlayer;

  arrayResults.forEach((item, index) => {
    if (item.id === currentResult.id) {
      placeOfPlayer = numberOfPlayers - index;
    }
  });

  const betterThanOtherPlayer = (1 - placeOfPlayer / numberOfPlayers) * 100;

  return `<span class="main-comparison">Вы заняли ${placeOfPlayer}-ое место из ${numberOfPlayers} игроков. Это&nbsp;лучше чем у&nbsp;${betterThanOtherPlayer}%&nbsp;игроков</span>`;
};

export default calculationOfResults;
