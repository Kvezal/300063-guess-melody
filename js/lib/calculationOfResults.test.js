import assert from 'assert';
import calculationOfResults from './calculationOfResults';

const arrayResults = [
  {
    points: 20,
    numberOfQuickAnswers: 10,
    lives: 3,
    time: 200,
    timeLeft: 100,
    id: 1
  },
  {
    points: 10,
    numberOfQuickAnswers: 6,
    lives: 1,
    time: 100,
    timeLeft: 200,
    id: 4
  },
  {
    points: 15,
    numberOfQuickAnswers: 8,
    lives: 2,
    time: 100,
    timeLeft: 200,
    id: 2
  },
  {
    points: 12,
    numberOfQuickAnswers: 2,
    lives: 3,
    time: 30,
    timeLeft: 270,
    id: 3
  }
];

suite(`Function of calculationOfResults works correct`, () => {
  test(`Player won`, () => {
    let currentResult = {
      points: 18,
      numberOfQuickAnswers: 8,
      lives: 3,
      time: 200,
      timeLeft: 100,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">За&nbsp;1&nbsp;минуты и 40&nbsp;секунд
      <br>вы&nbsp;набрали 18 баллов (8 быстрых)
      <br>совершив 0 ошибки
    </div>
    <span class="main-comparison">Вы заняли 2-е место из 5 игроков. Это&nbsp;лучше чем у&nbsp;60%&nbsp;игроков</span>`);

    currentResult = {
      points: 12,
      numberOfQuickAnswers: 8,
      lives: 1,
      time: 200,
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
    let currentResult = {
      points: 0,
      lives: 3,
      time: 0,
      timeLeft: 300,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`);

    currentResult = {
      points: 0,
      lives: 1,
      time: -5,
      timeLeft: 305,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`);

    currentResult = {
      points: 1,
      lives: 2,
      timeLeft: 100,
      id: 5
    };

    assert.notStrictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`);
  });

  test(`The player lost - the attempts ended`, () => {
    let currentResult = {
      points: 0,
      lives: -1,
      timeLeft: 100,
      id: 5
    };

    assert.strictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`);

    currentResult = {
      points: 1,
      lives: 2,
      timeLeft: 100,
      id: 5
    };

    assert.notStrictEqual(calculationOfResults(arrayResults, currentResult), `<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`);
  });
});
