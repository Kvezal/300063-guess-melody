import newDOMElement from '../lib/newDOMElement';

class AbstractView {
  get template() {
    throw new Error(`You have to define template for view`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
    }
    const element = this._element.cloneNode(true);
    this.bind(element);
    return element;
  }

  bind() {

  }

  render() {
    return newDOMElement(this.template);
  }
}


export default AbstractView;
