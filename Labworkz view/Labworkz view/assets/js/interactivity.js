document.addEventListener('DOMContentLoaded', () => {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    let currentIndex = 0;
  
    setInterval(() => {
      const testimonials = testimonialSlider.querySelectorAll('.testimonial');
      testimonials[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % testimonials.length;
      testimonials[currentIndex].style.display = 'block';
    }, 3000);
  });
  