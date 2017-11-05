import error from '../screens/error-screen';

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

const downloadPartOfAudio = (listAudio, lowIndex, pack) => {
  return new Promise((resolve) => {

    const nextPart = () => {
      if (listAudio.length <= topIndex) {
        return resolve(true);
      }
      return downloadPartOfAudio(listAudio, topIndex, pack);
    };

    const topIndex = lowIndex + pack;
    const partOfAudio = listAudio.slice(lowIndex, topIndex);

    return Promise.all(partOfAudio.map((it) => loadAudio(it))).
        then(nextPart).
        then(resolve).
        catch(error.show);
  });
};

export {loadImage, downloadPartOfAudio};
