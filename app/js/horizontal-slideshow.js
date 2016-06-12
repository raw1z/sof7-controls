import Slideshow from 'js/slideshow'
import HorizontalSlideTransitionStrategy from 'js/horizontal-slide-transition-strategy'

class HorizontalSlideshow extends Slideshow {
  constructor(selector) {
    let transitionStrategy = new HorizontalSlideTransitionStrategy();
    super(selector, transitionStrategy);
  }
}

export default HorizontalSlideshow;


