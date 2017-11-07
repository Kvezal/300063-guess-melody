async function loadAudio(url) {
  return new Promise((onLoad, onError) => {
    const audio = new Audio();
    audio.oncanplaythrough = () => onLoad(audio);
    audio.onerror = () => onError(`Не удалось загрузить мелодию: ${url}`);
    audio.src = url;
  });
}

const loadImage = (url) => {
  return new Promise((onLoad, onError) => {
    const image = new Image();
    image.onload = () => onLoad(image);
    image.onerror = () => onError(`Не удалось загрузить изображение: ${url}`);
    image.src = url;
  });
};

async function downloadPartOfAudio(listAudio) {
  const listFile = [];
  for (const item of listAudio) {
    const file = await loadAudio(item);
    listFile.push(file);
  }
  return listFile;
}

export {loadImage, downloadPartOfAudio, loadAudio};
