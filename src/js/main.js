import "../styles/main.css";
import { initTheme } from "./theme.js";
import { initCatalog } from "./catalog.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSlider();
  initCatalog();
});

function initSlider() {
  const slides = document.querySelectorAll(".slider__slide");
  const prevBtn = document.querySelector(".slider__arrow--prev");
  const nextBtn = document.querySelector(".slider__arrow--next");
  const dots = document.querySelectorAll(".slider__dot");

  if (!slides.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("slider__slide--active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("slider__dot--active", i === index);
    });

    currentIndex = index;
  }

  prevBtn.addEventListener("click", () => {
    const index = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  nextBtn.addEventListener("click", () => {
    const index = (currentIndex + 1) % slides.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });
}
