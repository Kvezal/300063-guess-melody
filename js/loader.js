import adapt from './data/data-adapter';

const SERVER_URL = `http://localhost:3000`;
const DEFAULT_NAME = `user`;

const loadAudio = (url) => {
  return new Promise((onLoad, onError) => {
    const audio = new Audio();
    audio.addEventListener(`canplaythrough`, () => onLoad(audio));
    audio.onerror = () => onError(`Не удалось загрузить мелодию: ${url}`);
    audio.src = url;
  });
};

const loadImage = (url) => {
  return new Promise((onLoad, onError) => {
    const image = new Image();
    image.onload = () => onLoad(image);
    image.onerror = () => onError(`Не удалось загрузить изображение: ${url}`);
    image.src = url;
  });
};

class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).
        then((response) => response.json()).
        then(adapt);
  }

  static loadResults(name = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/${name}`)
        .then((response) => response.json());
  }

  static saveResults(data, name = DEFAULT_NAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`${SERVER_URL}/stats/${name}`, requestSettings);
  }

  static loadResourses(resourses) {
    const listOfAudio = new Set();
    const listOfImage = new Set();

    resourses.forEach((it) => {
      if (it.type === `genre`) {
        it.answers.forEach((answer) => listOfAudio.add(answer.src));

      }
      if (it.type === `artist`) {
        it.answers.forEach((answer) => listOfImage.add(answer.image));
        listOfAudio.add(it.question);
      }
    });

    [...listOfImage].map((it) => loadImage(it));

    return [...listOfAudio].map((it) => loadAudio(it));
  }
}

export default Loader;
