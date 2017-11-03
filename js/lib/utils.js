import {initialState} from '../data/data';
import countPoints from '../lib/countPoints';

// Получение DOM элемента из разметки
const getElementFromTemplate = (markup) => {
  const containerForNewHTMLElement = document.createElement(`template`);
  containerForNewHTMLElement.innerHTML = markup;
  return containerForNewHTMLElement.content;
};


// Отображение элементов на странице
const appDisplay = document.querySelector(`.main`);

const clearDisplay = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const displayElement = (element, parent) => {
  clearDisplay(parent);
  parent.appendChild(element);
};

const displayScreen = (screen) => {
  displayElement(screen, appDisplay);
};


// Функционал треков
const playSong = (element) => {
  element.classList.add(`player-control--pause`);
  element.classList.remove(`player-control--play`);
  element.parentElement.querySelector(`audio`).play();
};

const stopSong = (element) => {
  element.classList.remove(`player-control--pause`);
  element.classList.add(`player-control--play`);
  element.parentElement.querySelector(`audio`).pause();
};


// Расчет параметров кругового таймера
const getStrokeDasharray = (radius) => {
  return Math.floor(2 * Math.PI * radius);
};

const getStrokeDashoffset = (ratioOfTimes, lengthCircle) => {
  return (1 - ratioOfTimes) * lengthCircle;
};


// Функции для загрузки файлов с внешних ресурсов
const loadAudio = (url) => {
  return new Promise((onLoad, onError) => {
    const audio = new Audio();
    audio.addEventListener(`canplaythrough`, () => {
      return onLoad(audio);
    });
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


// Функция downloadPartOfAudio позволяет разбить поток запросов к аудиофайлов для
// корректной работы хрома, пробовал задавать хначение pack больше 5, в результате
// падала надежность работы приложения, в FF и в других браузерах все работает
// правильно и без этой функции
const downloadPartOfAudio = (listAudio, lowIndex, pack) => {
  return new Promise((resolve) => {

    const nextPart = () => {
      if (listAudio.length <= topIndex) {
        return resolve(true);
      }
      return downloadPartOfAudio(listAudio, topIndex, pack);
    };

    let topIndex = lowIndex + pack;
    const partOfAudio = listAudio.slice(lowIndex, topIndex);

    return Promise.all(partOfAudio.map((it) => loadAudio(it))).
        then(nextPart).
        then(resolve);
  });
};

const cloneObject = (obj) => {
  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

const getCurrentResult = (state) => {
  const counterPoints = countPoints(state.answers, state.lives);
  return {
    points: counterPoints.points,
    numberOfQuickAnswers: counterPoints.numberOfQuickAnswers,
    lives: state.lives,
    time: state.time,
    timeLeft: initialState.time - state.time,
    id: +new Date()
  };
};

export {
  getElementFromTemplate,
  displayScreen,
  displayElement,
  playSong,
  stopSong,
  getStrokeDasharray,
  getStrokeDashoffset,
  loadImage,
  downloadPartOfAudio,
  cloneObject,
  getCurrentResult
};
