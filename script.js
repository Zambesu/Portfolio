window.onscroll = function() {
  const nav = document.querySelector('header');
  if (window.pageYOffset > 0) {
    nav.classList.remove('hidden');
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};
