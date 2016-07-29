import { TweenLite, TweenMax, TimelineMax } from 'gsap';
import Scrollmagic from 'scrollmagic';
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

class ScrollController {
  constructor() {
    this.controller = new Scrollmagic.Controller();
  }

  addScene(options, callback) {
    let scene = new Scrollmagic.Scene(options);
    if (callback) {
      callback(scene);
    }
    scene.addTo(this.controller);
  }
}

export default ScrollController;

