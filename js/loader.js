import adapt from './data/data-adapter';
import {loadImage, downloadPartOfAudio} from './lib/utils';
import error from './screens/error';

const SERVER_URL = `https://es.dump.academy/guess-melody`;
const DEFAULT_NAME = `kvezal300063`;

class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).
        then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
        }).
        then(adapt).
        catch(error.init);
  }

  static loadResults(name = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/${name}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
        });
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
    let listOfAudio = new Set();
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

    return downloadPartOfAudio([...listOfAudio], 0, 4);
  }
}

export default Loader;
