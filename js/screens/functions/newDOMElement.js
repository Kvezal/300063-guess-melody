export default (markup) => {
  const containerForNewHTMLElement = document.createElement(`div`);

  containerForNewHTMLElement.insertAdjacentHTML(`beforeEnd`, markup);

  return containerForNewHTMLElement.firstElementChild;
};
