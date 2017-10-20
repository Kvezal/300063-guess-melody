import audioData from './audioData';
import setCurrentState from './setCurrentState';

const initialState = {
  level: 0,
  lives: 3,
  time: 300
};

const currentState = {};
setCurrentState();

const currentAnswers = [];

// Массив arrayResults для тестирования статистики
let arrayResults = [
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

const GANRES = {
  'Jazz': `джаз`,
  'Rock': `рок`,
  'Country': `кантри`,
  'R&B': `рнб`,
  'Pop': `поп`,
  'Electronic': `электронные`
};

const data = [
  {
    question: audioData[0].src,
    nextLevel: 1,
    type: `artist`,

    answers: [
      {
        artist: audioData[0].artist,
        image: audioData[0].image,
        isCorrect: true
      },
      {
        artist: audioData[1].artist,
        image: audioData[1].image,
        isCorrect: false
      },
      {
        artist: audioData[2].artist,
        image: audioData[2].image,
        isCorrect: false
      }
    ]
  },

  {
    question: `Выберите ${GANRES[audioData[1].genre]} треки`,
    nextLevel: 2,
    type: `genre`,

    answers: [
      {
        genre: audioData[0].genre,
        src: audioData[0].src,
        isCorrect: false
      },
      {
        genre: audioData[1].genre,
        src: audioData[1].src,
        isCorrect: true
      },
      {
        genre: audioData[2].genre,
        src: audioData[2].src,
        isCorrect: false
      },
      {
        genre: audioData[3].genre,
        src: audioData[3].src,
        isCorrect: false
      }
    ]
  },

  {
    question: audioData[4].src,
    nextLevel: 3,
    type: `artist`,

    answers: [
      {
        artist: audioData[3].artist,
        image: audioData[3].image,
        isCorrect: false
      },
      {
        artist: audioData[4].artist,
        image: audioData[4].image,
        isCorrect: true
      },
      {
        artist: audioData[5].artist,
        image: audioData[5].image,
        isCorrect: false
      }
    ]
  },

  {
    question: `Выберите ${GANRES[audioData[5].genre]} треки`,
    nextLevel: 0,
    type: `genre`,

    answers: [
      {
        genre: audioData[2].genre,
        src: audioData[2].src,
        isCorrect: false
      },
      {
        genre: audioData[3].genre,
        src: audioData[3].src,
        isCorrect: false
      },
      {
        genre: audioData[4].genre,
        src: audioData[4].src,
        isCorrect: false
      },
      {
        genre: audioData[5].genre,
        src: audioData[5].src,
        isCorrect: true
      }
    ]
  }
];

const results = {
  win: {
    title: `Вы настоящий меломан!`
  },
  timeIsOver: {
    title: `Увы и ах!`
  },
  attemptsEnded: {
    title: `Какая жалость!`
  }
};

export {initialState, currentState, data, results, arrayResults, currentAnswers};
