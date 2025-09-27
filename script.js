// Scroll reveal functionality
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  scrollRevealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    } else {
      element.classList.remove('active'); // Remove this line if you want reveal only once
    }
  });
};

// Event listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
