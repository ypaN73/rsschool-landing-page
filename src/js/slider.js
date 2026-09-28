export function initSlider() {
  const track = document.querySelector(".slider__track");
  const slides = document.querySelectorAll(".slider__slide");
  const prevBtn = document.querySelector(".slider__arrow--prev");
  const nextBtn = document.querySelector(".slider__arrow--next");
  const dots = document.querySelectorAll(".slider__dot");

  if (!track || !slides.length || !prevBtn || !nextBtn) return;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.classList.add("slider__slide--clone");
  lastClone.classList.add("slider__slide--clone");

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll(".slider__slide");

  let currentIndex = 1;
  let isAnimating = false;

  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  function showSlide(index) {
    if (isAnimating) return;
    if (index === currentIndex) return;
    if (index < 0 || index >= allSlides.length) return;

    isAnimating = true;
    currentIndex = index;

    track.style.transition = "transform 0.4s ease";
    track.style.transform = `translateX(-${index * 100}%)`;

    const dotIndex = (index - 1 + slides.length) % slides.length;
    dots.forEach((dot, i) => {
      dot.classList.toggle("slider__dot--active", i === dotIndex);
    });
  }

  track.addEventListener("transitionend", () => {
    isAnimating = false;

    if (currentIndex === allSlides.length - 1) {
      track.style.transition = "none";
      currentIndex = 1;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (currentIndex === 0) {
      track.style.transition = "none";
      currentIndex = slides.length;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i + 1));
  });
}
