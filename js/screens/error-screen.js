import ErrorView from '../views/error-view';

class ErrorScreen {
  init(message) {
    const view = new ErrorView(message);

    view.closeErrorClickHandler = (evt) => {
      evt.preventDefault();
      document.body.removeChild(errorDiv);
    };

    document.body.appendChild(view.element);
    const errorDiv = document.querySelector(`.error-message`);
  }
}

export default new ErrorScreen();
