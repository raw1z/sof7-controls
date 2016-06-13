import AnimatedSlideTransitionStrategy from 'js/animated-slide-transition-strategy'
import {TimelineMax} from 'gsap'

class HorizontalSlideTransitionStrategy extends AnimatedSlideTransitionStrategy {

  createAnimationTimeline(from, to) {
    return new TimelineMax()
      .to(from.$('.slide-content'), 0.5, {x: "-100%", autoAlpha: 0, ease: Power4.easeInOut})
      .add(function() {
        from.toggleVisibility();
        to.toggleVisibility();
      })
      .from(to.$('.slide-content h1'), 0.5, {x: 100, autoAlpha: 0, ease: Elastic.easeInOut}, "-=0.5")
      .from(to.$('.slide-content p'), 0.5, {x: 100, autoAlpha: 0, ease: Elastic.easeInOut}, "-=0.25");
  }
}

export default HorizontalSlideTransitionStrategy;


