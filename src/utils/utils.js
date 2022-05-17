const preventDefault = e => e.preventDefault();

export const disableTouchScroll = () => {
  document.body.addEventListener('touchmove', preventDefault, {
    passive: false,
  });
};
export const enableTouchScroll = () => {
  document.body.removeEventListener('touchmove', preventDefault);
};

export const toggleNoScroll = () => {
  const html = document.documentElement;

  if (html.classList.contains('no-scroll')) {
    html.classList.remove('no-scroll');
  } else {
    html.classList.add('no-scroll');
  }
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
