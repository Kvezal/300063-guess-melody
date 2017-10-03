export default (markup) => {
  const containerForNewHTMLElement = document.createElement(`template`);

  containerForNewHTMLElement.innerHTML = markup;

  return containerForNewHTMLElement.content;
};
