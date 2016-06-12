import Slideshow from 'js/slideshow'
import DoublePanesSlideTransitionStrategy from 'js/double-panes-slide-transition-strategy'

class DoublePanesSlideshow extends Slideshow {
  constructor(selector) {
    let transitionStrategy = new DoublePanesSlideTransitionStrategy()
    super(selector, transitionStrategy);
  }
}

export default DoublePanesSlideshow;

