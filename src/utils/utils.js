export const toggleNoScroll = () => {
  const body = document.body;

  if (body.classList.contains('no-scroll')) {
    body.classList.remove('no-scroll');
  } else {
    body.classList.add('no-scroll');
  }
};
