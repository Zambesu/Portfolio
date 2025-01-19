window.onscroll = function() {
  const nav = document.querySelector('header');
  if (window.pageYOffset > 0) {
    nav.classList.remove('hidden');
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};
// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');  // Add class to trigger animation
      observer.unobserve(entry.target);  // Stop observing after triggering
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Observe the skill bars container
const skillBars = document.querySelector('.skill-bars');
observer.observe(skillBars);
