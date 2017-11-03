import AbstractView from '../views/abstract-view';

class ErrorView extends AbstractView {
  constructor(message) {
    super();

    this.message = message;
  }

  get template() {
    return (
      `<div class="error-message">
        <button class="error-message__button"></button>
        ${this.message}
      </div>`
    );
  }

  bind(element) {
    const closeError = element.querySelector(`.error-message__button`);
    closeError.onclick = (evt) => this.closeErrorClickHandler(evt);
  }
}

export default ErrorView;
