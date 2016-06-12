import Slideshow from 'js/slideshow'
import HorizontalSlide from 'js/horizontal-slide'

class HorizontalSlideshow extends Slideshow {
  constructor(selector) {
    super(selector, HorizontalSlide);
  }
}

export default HorizontalSlideshow;


