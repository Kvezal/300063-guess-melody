import adapt from './data/data-adapter';
import {loadImage, downloadPartOfAudio} from './lib/file-load';

const SERVER_URL = `https://es.dump.academy/guess-melody`;
const DEFAULT_NAME = `kvezal300063`;

class Loader {
  static async loadData() {
    const response = await fetch(`${SERVER_URL}/questions`);
    if (response.ok) {
      const responseData = await response.json();
      return adapt(responseData);
    }
    throw new Error(`Неизвестный статус: ${response.status}`);
  }

  static async loadResults(name = DEFAULT_NAME) {
    const response = await fetch(`${SERVER_URL}/stats/${name}`);
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Неизвестный статус: ${response.status}`);
  }

  static async saveResults(data, name = DEFAULT_NAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`${SERVER_URL}/stats/${name}`, requestSettings);
  }

  static async loadResourses(resourses) {
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
    return downloadPartOfAudio([...listOfAudio]);
  }
}

export default Loader;
