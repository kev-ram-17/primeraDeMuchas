export function initCarousel() {
  const slide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");
  let currentIndex = 0;
  let transitioning = false;

  function updateSlide() {
    const offset = -currentIndex * 100;
    slide.style.transform = `translateX(${offset}%)`;

    if (currentIndex === images.length - 1 && !transitioning) {
      transitioning = true;
      setTimeout(() => {
        slide.style.transition = "none"; 
        currentIndex = 0;
        updateSlide();
        setTimeout(() => {
          slide.style.transition = "transform 0.5s ease-in-out"; 
          transitioning = false;
        }, 10); 
      }, 500); 
    }
  }

  function nextImage() {
    if (!transitioning) {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide();
    }
  }

  setInterval(nextImage, 5000); 
}
