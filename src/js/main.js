import "../styles/main.css";
import { initTheme } from "./theme.js";
import { initSlider } from "./slider.js";
import { initCatalog } from "./catalog.js";
import { initBurger } from "./burger.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSlider();
  initCatalog();
  initBurger();
});
