class Control {
  constructor(selector) {
    if (selector.selector) {
      this.selector = selector.selector;
      this.element = selector;
    }
    else {
      this.selector = selector;
      this.element = $(this.selector);
    }
  }

  $(selector) {
    if (selector) {
      return $(selector, this.element);
    }
    else {
      return this.element;
    }
  }
}

export default Control;
