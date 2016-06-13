class SlideTransitionStrategy {
  forward(from, to) {
    from.sendToBack();
    to.bringToFront();
  }

  backward(from, to) {
    from.sendToBack();
    to.bringToFront();
  }
}

export default SlideTransitionStrategy;
