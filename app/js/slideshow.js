import Control from 'js/control'
import NavigationButton from 'js/navigation-button'

class Slideshow extends Control {
  constructor(selector, paneClass) {
    super(selector);
    this.createSlides(paneClass);
    this.createNavButtons();
    this.setupNavButtons();
  }

  createSlides(paneClass) {
    let slidesElements = this.$('> .slide').toArray();
    var previousSlide = null;
    var slides = []

    for (var slideElement of slidesElements) {
      let slide = new paneClass(slideElement);
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
    if (this.currentSlide.previous) {
      this.currentSlide.hide();
      this.currentSlide.previous.show();
      this.currentSlide = this.currentSlide.previous;

      this.forwardButton.show()
      if (!this.currentSlide.previous) {
        this.backwardButton.hide();
      }
    }
  }

  showNextSlide() {
    if (this.currentSlide.next) {
      this.currentSlide.hide();
      this.currentSlide.next.show();
      this.currentSlide = this.currentSlide.next;

      this.backwardButton.show();
      if (!this.currentSlide.next) {
        this.forwardButton.hide();
      }
    }
  }
}

export default Slideshow;


