import assert from 'assert';
import countPoints from './countPoints';

suite(`Function of countPoints works correct`, () => {
  test(`The player answered less than 10 question`, () => {
    let answers = [
      {answer: true, time: 26},
      {answer: true, time: 46},
      {answer: true, time: 16},
      {answer: true, time: 53},
      {answer: true, time: 21},
      {answer: true, time: 11},
      {answer: true, time: 2}
    ];

    assert.strictEqual(countPoints(answers, 3), -1);

    answers = [
      {answer: true, time: 26},
      {answer: true, time: 46},
      {answer: true, time: 16},
      {answer: true, time: 53},
      {answer: true, time: 21},
      {answer: true, time: 11},
      {answer: true, time: 2},
      {answer: true, time: 72},
      {answer: true, time: 18},
      {answer: true, time: 13}
    ];

    assert.notStrictEqual(countPoints(answers, 3), -1);
  });

  test(`The player made mistakes less than the maximum amount`, () => {
    let answers = [
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 72},
      {answer: true, time: 26},
      {answer: true, time: 26}
    ];

    assert.deepStrictEqual(countPoints(answers, 3), {points: 19, numberOfQuickAnswers: 9});

    answers = [
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: false, time: 26},
      {answer: false, time: 26}
    ];

    assert.deepStrictEqual(countPoints(answers, 1), {points: 12, numberOfQuickAnswers: 8});

    answers = [
      {answer: true, time: 31},
      {answer: true, time: 31},
      {answer: true, time: 31},
      {answer: true, time: 31},
      {answer: true, time: 31},
      {answer: true, time: 31},
      {answer: true, time: 31},
      {answer: true, time: 31},
      {answer: false, time: 26},
      {answer: false, time: 26}
    ];

    assert.deepStrictEqual(countPoints(answers, 1), {points: 4, numberOfQuickAnswers: 0});

    answers = [
      {answer: false, time: 31},
      {answer: false, time: 31},
      {answer: true, time: 31},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26}
    ];

    assert.deepStrictEqual(countPoints(answers, 1), {points: 11, numberOfQuickAnswers: 7});

    answers = [
      {answer: false, time: 31},
      {answer: false, time: 31},
      {answer: false, time: 31},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26}
    ];

    assert.strictEqual(countPoints(answers, 0), -1);
  });

  test(`The player quickly answered all the questions without mistakes`, () => {
    const answers = [
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26},
      {answer: true, time: 26}
    ];

    assert.deepStrictEqual(countPoints(answers, 3), {points: 20, numberOfQuickAnswers: 10});
  });
});
