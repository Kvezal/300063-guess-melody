const adaptGenreType = (initialData, nextLevel) => {
  const dataLevel = {
    question: initialData.question,
    type: initialData.type,
    nextLevel
  };

  dataLevel.answers = initialData.answers.map((it) => {
    const isCorrect = (initialData.genre === it.genre);

    return {
      src: it.src,
      genre: it.genre,
      isCorrect
    };
  });

  return dataLevel;
};

const adaptArtistType = (initialData, nextLevel) => {
  const dataLevel = {
    question: initialData.src,
    type: initialData.type,
    nextLevel
  };

  dataLevel.answers = initialData.answers.map((it) => {
    return {
      artist: it.title,
      image: it.image.url,
      isCorrect: it.isCorrect
    };
  });

  return dataLevel;
};

const QuestionType = {
  'genre': adaptGenreType,
  'artist': adaptArtistType
};

const adaptData = (data) => {
  const adapted = [];

  data.forEach((item, index, array) => {
    let nextLevel = index + 1;
    if (array.length === nextLevel) {
      nextLevel = 0;
    }
    adapted[index] = QuestionType[item.type](item, nextLevel);
  });

  return adapted;
};

export default adaptData;
