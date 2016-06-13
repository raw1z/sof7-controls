import SlideTransitionStrategy from 'js/slide-transition-strategy'
import {TimelineMax} from 'gsap'

class AnimatedSlideTransitionStrategy extends SlideTransitionStrategy {
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

    let animationTimeline = this.createAnimationTimeline(from, to);

    this.timeline
      .addLabel(label)
      .add(animationTimeline)
      .addPause();

    this.timeline.resume();
  }

  backward(from, to) {
    this.timeline.reverse();
  }

  createAnimationTimeline(from, to) {
    return new TimelineMax();
  }
}

export default AnimatedSlideTransitionStrategy;

