import Control from 'js/control'

class Slide extends Control {
  constructor(selector) {
    super(selector);
  }

  hide() {
    this.element.css('z-index', 100);
  }

  show() {
    this.element.css('z-index', 300);
  }

  setNext(slide) {
    this.next = slide;
  }

  setPrevious(slide) {
    this.previous = slide;
  }
}

export default Slide;


