export const toggleNoScroll = () => {
  const html = document.documentElement;

  if (html.classList.contains('no-scroll')) {
    html.classList.remove('no-scroll');
  } else {
    html.classList.add('no-scroll');
  }
};
