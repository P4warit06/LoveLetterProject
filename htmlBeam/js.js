let currentSlide = 0;

function slidePictures() {
  const slides = document.querySelectorAll(".slider img"); // Select all images in the slider
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? "block" : "none"; // Show the current slide, hide others
  });

  currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide, loop back to the first
}

setInterval(slidePictures, 3000);
