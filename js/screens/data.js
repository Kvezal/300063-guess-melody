import audioData from './audioData';

const initialState = {
  level: 0,
  lives: 3,
  time: 300
};

const artistLevels = [
  {
    question: audioData[0].src,

    answers: new Set([
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
    ])
  },
  {
    question: audioData[4].src,

    answers: new Set([
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
    ])
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

const genreLevels = [
  {
    question: `Выберите ${GANRES[audioData[1].genre]} треки`,

    answers: new Set([
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
    ])
  },
  {
    question: `Выберите ${GANRES[audioData[5].genre]} треки`,

    answers: new Set([
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
    ])
  }
];

const result = {
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

export {initialState, artistLevels, genreLevels, result};
