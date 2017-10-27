import {data} from '../data/data';

const getCheckedFormElement = (list, actualLevel) => {
  const result = [];

  Array.prototype.forEach.call(list, (it, index) => {
    if (it.checked) {
      result.push(data[actualLevel].answers[index].isCorrect === it.checked);
    }
    return false;
  });

  return result;
};

export default getCheckedFormElement;
