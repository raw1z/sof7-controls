import Control from 'js/control'

class NavigationButton extends Control {
  constructor(selector, action) {
    super(selector);
    this.$('a').on('click', action);
  }

  show() {
    this.element.css('opacity', 1);
  }

  hide() {
    this.element.css('opacity', 0);
  }
}


export default NavigationButton;
