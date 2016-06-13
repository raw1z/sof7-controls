import AnimatedSlideTransitionStrategy from 'js/animated-slide-transition-strategy'
import {TimelineMax} from 'gsap'

class DoublePanesSlideTransitionStrategy extends AnimatedSlideTransitionStrategy {

  createAnimationTimeline(from, to) {
    return new TimelineMax()
      .to(from.$('.pane-left .pane-content'), 0.5, {y: "-100%", autoAlpha: 0, ease: Power4.easeInOut})
      .add(function() {
        from.toggleVisibility();
        to.toggleVisibility();
      })
      .from(to.$('.pane-left .pane-content'), 0.5, {y: "100%", autoAlpha: 0, ease: Power4.easeInOut})
      .from(to.$('.pane-left h1'), 0.5, {y: -100, autoAlpha: 0}, "-=0.5")
      .from(to.$('.pane-left p'), 0.5, {y: 100, autoAlpha: 0}, "-=0.5")
      .from(to.$('.pane-right'), 0.5, {autoAlpha: 0}, "-=0.5");
  }

}

export default DoublePanesSlideTransitionStrategy;

