import assert from 'assert';
import countPoints from './countPoints';

suite(`Function of countPoints works correct`, () => {
  test(`The player answered less than 10 question`, () => {
    let answers = [
      {answer: true, time: 26000},
      {answer: true, time: 46000},
      {answer: true, time: 16000},
      {answer: true, time: 53000},
      {answer: true, time: 21000},
      {answer: true, time: 11000},
      {answer: true, time: 2000}
    ];

    assert.strictEqual(countPoints(answers, 0), -1);

    answers = [
      {answer: true, time: 26000},
      {answer: true, time: 46000},
      {answer: true, time: 16000},
      {answer: true, time: 53000},
      {answer: true, time: 21000},
      {answer: true, time: 11000},
      {answer: true, time: 2000},
      {answer: true, time: 72000},
      {answer: true, time: 18000},
      {answer: true, time: 13000}
    ];

    assert.notStrictEqual(countPoints(answers, 3), -1);
  });

  test(`The player made mistakes less than the maximum amount`, () => {
    let answers = [
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 72000},
      {answer: true, time: 26000},
      {answer: true, time: 26000}
    ];

    assert.strictEqual(countPoints(answers, 1), 19);

    answers = [
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: false, time: 26000},
      {answer: false, time: 26000}
    ];

    assert.strictEqual(countPoints(answers, 1), 12);

    answers = [
      {answer: true, time: 31000},
      {answer: true, time: 31000},
      {answer: true, time: 31000},
      {answer: true, time: 31000},
      {answer: true, time: 31000},
      {answer: true, time: 31000},
      {answer: true, time: 31000},
      {answer: true, time: 31000},
      {answer: true, time: 26000},
      {answer: false, time: 26000}
    ];

    assert.strictEqual(countPoints(answers, 2), 8);

    answers = [
      {answer: false, time: 31000},
      {answer: false, time: 31000},
      {answer: false, time: 31000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000}
    ];

    assert.strictEqual(countPoints(answers, 2), 8);

    answers = [
      {answer: false, time: 31000},
      {answer: false, time: 31000},
      {answer: false, time: 31000},
      {answer: false, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000}
    ];

    assert.strictEqual(countPoints(answers, -1), -1);
  });

  test(`The player quickly answered all the questions without mistakes`, () => {
    let answers = [
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000}
    ];

    assert.strictEqual(countPoints(answers, 3), 20);

    answers = [
      {answer: false, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000},
      {answer: true, time: 26000}
    ];

    assert.notStrictEqual(countPoints(answers, 2), 20);
  });
});
