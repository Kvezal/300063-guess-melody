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
      lives: 2,
      timeLeft: 100,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `Вы заняли 2-ое место из 5 игроков. Это&nbsp;лучше чем у&nbsp;60%&nbsp;игроков`);

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

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `Вы заняли 5-ое место из 5 игроков. Это&nbsp;лучше чем у&nbsp;0%&nbsp;игроков`);
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

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `Время вышло! Вы не успели отгадать все мелодии`);

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

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `Время вышло! Вы не успели отгадать все мелодии`);

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

    assert.notStrictEqual(calculationOfResults(arrayResults, currentResult), `Время вышло! Вы не успели отгадать все мелодии`);
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

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);

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

    assert.notStrictEqual(calculationOfResults(arrayResults, currentResult), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});
