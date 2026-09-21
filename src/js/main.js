import "../styles/main.css";
import { initTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
});

const slides = document.querySelectorAll(".slider__slide");
const prevBtn = document.querySelector(".slider__arrow--prev");
const nextBtn = document.querySelector(".slider__arrow--next");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("slider__slide--active", i === index);
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
