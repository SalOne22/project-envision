const button = document.getElementById('scrollToTopBtn');

const MIN_SCROLL_TO_APPEAR = 100;

const displayButton = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > MIN_SCROLL_TO_APPEAR) {
      button.classList.add('show-btn');
      button.classList.remove('remove-btn');
    } else if (window.scrollY === 0) {
      button.classList.remove('show-btn');
      button.classList.add('remove-btn');
    }
  });
};

const scrollToTop = () => {
  button.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
};

displayButton();
scrollToTop();
