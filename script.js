// Smooth scroll to anchors
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-menu a');

for (let mobileLink of mobileLinks) {
  mobileLink.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
  });
}

// Show "back to top" button when scrolling down
const topButton = document.querySelector('.top-button');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 400) {
    topButton.classList.add('active');
  } else {
    topButton.classList.remove('active');
  }
});

// Smooth scroll to top when "back to top" button is clicked
topButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});