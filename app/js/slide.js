import Control from 'js/control'

class Slide extends Control {
  constructor(selector) {
    super(selector);
    this.id = this.$().attr('data-id');
  }

  toggleVisibility() {
    if (this.isVisible()) {
      this.sendToBack()
    }
    else {
      this.bringToFront()
    }
  }

  isVisible() {
    return (this.element.css('z-index') === "300");
  }

  sendToBack() {
    this.element.css('z-index', 100);
  }

  bringToFront() {
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


