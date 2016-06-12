import Control from 'js/control'
import NavigationButton from 'js/navigation-button'
import Slide from 'js/slide'
import SlideTransitionController from 'js/slide-transition-controller'

class Slideshow extends Control {
  constructor(selector, transitionStrategy) {
    super(selector);
    this.transitionController = new SlideTransitionController(transitionStrategy);
    this.createSlides();
    this.createNavButtons();
    this.setupNavButtons();
  }

  createSlides() {
    let slidesElements = this.$('> .slide').toArray();
    var previousSlide = null;
    var slides = []

    for (var slideElement of slidesElements) {
      let slide = new Slide(slideElement);
      slides.push(slide);

      if (previousSlide) {
        previousSlide.setNext(slide);
      }
      slide.setPrevious(previousSlide);
      previousSlide = slide;
    }

    this.slides = slides;
    this.currentSlide = this.slides[0];
    this.currentSlide.show();
  }

  createNavButtons() {
    let html = `
      <nav class="nav nav-backward">
        <a></a>
      </nav>
      <nav class="nav nav-forward">
        <a></a>
      </nav>
    `;
    this.$().append(html);
  }

  setupNavButtons() {
    this.backwardButton =
      new NavigationButton(this.$('> .nav-backward'), () => {
        this.showPreviousSlide();
      });

    this.forwardButton =
      new NavigationButton(this.$('> .nav-forward'), () => {
        this.showNextSlide();
      });

    this.backwardButton.hide();
  }

  showPreviousSlide() {
    this.currentSlide =
      this.transitionController.backward(this.currentSlide);

    this.forwardButton.show()
    if (!this.currentSlide.previous) {
      this.backwardButton.hide();
    }
  }

  showNextSlide() {
    this.currentSlide =
      this.transitionController.forward(this.currentSlide);

    this.backwardButton.show();
    if (!this.currentSlide.next) {
      this.forwardButton.hide();
    }
  }
}

export default Slideshow;


