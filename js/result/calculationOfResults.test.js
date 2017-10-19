import assert from 'assert';
import calculationOfResults from './calculationOfResults';

suite(`Function of calculationOfResults works correct`, () => {
  test(`Player won`, () => {
    let arrayResults = [
      {points: 20, lives: 3, timeLeft: 200, id: 1},
      {points: 10, lives: 1, timeLeft: 100, id: 4},
      {points: 15, lives: 2, timeLeft: 100, id: 2},
      {points: 12, lives: 3, timeLeft: 30, id: 3}
    ];

    let currentResult = {
      points: 18,
      numberOfQuickAnswers: 8,
      lives: 3,
      timeLeft: 100,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">За&nbsp;1&nbsp;минуты и 40&nbsp;секунд
      <br>вы&nbsp;набрали 18 баллов (8 быстрых)
      <br>совершив 0 ошибки
    </div>
    <span class="main-comparison">Вы заняли 2-е место из 5 игроков. Это&nbsp;лучше чем у&nbsp;60%&nbsp;игроков</span>`);

    arrayResults = [
      {points: 20, lives: 3, timeLeft: 200, id: 1},
      {points: 10, lives: 1, timeLeft: 100, id: 4},
      {points: 15, lives: 2, timeLeft: 100, id: 2},
      {points: 12, lives: 3, timeLeft: 30, id: 3}
    ];

    currentResult = {
      points: 12,
      numberOfQuickAnswers: 8,
      lives: 1,
      timeLeft: 100,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">За&nbsp;1&nbsp;минуты и 40&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 2 ошибки
    </div>
    <span class="main-comparison">Вы заняли 3-е место из 5 игроков. Это&nbsp;лучше чем у&nbsp;40%&nbsp;игроков</span>`);
  });

  test(`The player lost - the time is over`, () => {
    let arrayResults = [
      {points: 20, lives: 3, timeLeft: 200, id: 1},
      {points: 10, lives: 1, timeLeft: 100, id: 4},
      {points: 15, lives: 2, timeLeft: 100, id: 2},
      {points: 12, lives: 3, timeLeft: 30, id: 3}
    ];

    let currentResult = {
      points: 0,
      lives: 3,
      timeLeft: 0,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`);

    arrayResults = [
      {points: 20, lives: 3, timeLeft: 200, id: 1},
      {points: 10, lives: 1, timeLeft: 100, id: 4},
      {points: 15, lives: 2, timeLeft: 100, id: 2},
      {points: 12, lives: 3, timeLeft: 30, id: 3}
    ];

    currentResult = {
      points: 0,
      lives: 0,
      timeLeft: -5,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`);

    arrayResults = [
      {points: 20, lives: 3, timeLeft: 200, id: 1},
      {points: 10, lives: 1, timeLeft: 100, id: 4},
      {points: 15, lives: 2, timeLeft: 100, id: 2},
      {points: 12, lives: 3, timeLeft: 30, id: 3}
    ];

    currentResult = {
      points: 1,
      lives: 2,
      timeLeft: 100,
      id: 5
    };

    assert.notStrictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`);
  });

  test(`The player lost - the attempts ended`, () => {
    let arrayResults = [
      {points: 20, lives: 3, timeLeft: 200, id: 1},
      {points: 10, lives: 1, timeLeft: 100, id: 4},
      {points: 15, lives: 2, timeLeft: 100, id: 2},
      {points: 12, lives: 3, timeLeft: 30, id: 3}
    ];

    let currentResult = {
      points: 0,
      lives: -1,
      timeLeft: 100,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`);

    arrayResults = [
      {points: 20, lives: 3, timeLeft: 200, id: 1},
      {points: 10, lives: 1, timeLeft: 100, id: 4},
      {points: 15, lives: 2, timeLeft: 100, id: 2},
      {points: 12, lives: 3, timeLeft: 30, id: 3}
    ];

    currentResult = {
      points: 1,
      lives: 2,
      timeLeft: 100,
      id: 5
    };

    assert.notStrictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`);
  });
});
