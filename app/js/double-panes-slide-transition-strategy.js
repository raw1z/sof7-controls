import SlideTransitionStrategy from 'js/slide-transition-strategy'
import {TimelineMax} from 'gsap'

class DoublePanesSlideTransitionStrategy extends SlideTransitionStrategy {
  constructor() {
    super();
    this.timeline = new TimelineMax();
  }

  forward(from, to) {
    let timelineLabels = this.timeline.getLabelsArray().map((label) => label.name);
    let label = [from.id, to.id].sort().join('-');
    if (timelineLabels.indexOf(label) != -1) {
      this.timeline.play();
      return;
    }

    let timeline = new TimelineMax()
      .to(from.$('.pane-left .pane-content'), 0.5, {y: "-100%", autoAlpha: 0, ease: Power4.easeInOut})
      .add(function() {
        from.toggleVisibility();
        to.toggleVisibility();
      })
      .from(to.$('.pane-left .pane-content'), 0.5, {y: "100%", autoAlpha: 0, ease: Power4.easeInOut})
      .from(to.$('.pane-left h1'), 0.5, {y: -100, autoAlpha: 0}, "-=0.5")
      .from(to.$('.pane-left p'), 0.5, {y: 100, autoAlpha: 0}, "-=0.5")
      .from(to.$('.pane-right'), 0.5, {autoAlpha: 0}, "-=0.5");

    this.timeline
      .addLabel(label)
      .add(timeline)
      .addPause();

    this.timeline.resume();
  }

  backward(from, to) {
    this.timeline.reverse();
  }
}

export default DoublePanesSlideTransitionStrategy;

