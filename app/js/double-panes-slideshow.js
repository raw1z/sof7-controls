import Slideshow from 'js/slideshow'
import DoublePanesSlide from 'js/double-panes-slide'

class DoublePanesSlideshow extends Slideshow {
  constructor(selector) {
    super(selector, DoublePanesSlide);
  }
}

export default DoublePanesSlideshow;

