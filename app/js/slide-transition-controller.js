class SlideTransitionController {
  constructor(transitionStrategy) {
    this.transitionStrategy = transitionStrategy;
  }

  forward(slide) {
    if (slide.next) {
      this.transitionStrategy.forward(slide, slide.next);
      return slide.next;
    }
    else {
      return slide;
    }
  }

  backward(slide) {
    if (slide.previous) {
      this.transitionStrategy.backward(slide, slide.previous);
      return slide.previous;
    }
    else {
      return slide;
    }
  }
}

export default SlideTransitionController;
