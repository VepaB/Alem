document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.mini-slider');
  sliders.forEach(slider => {
    let index = 0;
    const slides = slider.querySelector('.slides').children;
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');

    function showSlide(i) {
      slides[index].style.opacity = '0';
      setTimeout(() => {
        slides[index].style.display = 'none';
        index = (i + slides.length) % slides.length;
        slides[index].style.display = 'block';
        setTimeout(() => {
          slides[index].style.opacity = '1';
        }, 10);
      }, 500); // Match the transition duration
    }

    prev.addEventListener('click', () => showSlide(index - 1));
    next.addEventListener('click', () => showSlide(index + 1));

    showSlide(index);

    // Auto-scroll functionality
    setInterval(() => showSlide(index + 1), 3500); // Change slide every 3.5 seconds for smoother transition
  });
});
