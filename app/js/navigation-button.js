import Control from 'js/control'

class NavigationButton extends Control {
  constructor(selector, action) {
    super(selector);
    this.$('a').on('click', action);
  }

  show() {
    this.element.removeClass('disabled');
  }

  hide() {
    this.element.addClass('disabled');
  }
}


export default NavigationButton;
