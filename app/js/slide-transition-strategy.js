class SlideTransitionStrategy {
  forward(from, to) {
    from.hide();
    to.show();
  }

  backward(from, to) {
    from.hide();
    to.show();
  }
}

export default SlideTransitionStrategy;
