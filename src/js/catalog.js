import products from "../products.json";

const MOBILE_VISIBLE = 4;
const MOBILE_LOAD = 4;

let currentCategory = "coffee";
let visibleCount = 4;

export function initCatalog() {
  const grid = document.getElementById("catalog-grid");
  const tabs = document.querySelectorAll(".catalog__tab");
  const moreBtn = document.getElementById("catalog-more");

  if (!grid || !tabs.length) return;

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function getVisibleCount() {
    if (isMobile()) {
      return visibleCount;
    }
    return Infinity;
  }

  function renderCards() {
    const filtered = products.filter(
      (product) => product.category === currentCategory,
    );

    const count = getVisibleCount();
    const visible = filtered.slice(0, count);

    grid.innerHTML = "";

    visible.forEach((product) => {
      grid.appendChild(createCard(product));
    });

    if (isMobile() && visible.length < filtered.length) {
      moreBtn.style.display = "inline-flex";
    } else {
      moreBtn.style.display = "none";
    }
  }

  function createCard(product) {
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML = `
      <div class="card__img-wrapper">
        <img
          src="./images/${product.image}"
          alt="${product.name}"
          class="card__img"
        />
      </div>
      <div class="card__info">
        <h2 class="card__title heading-3">${product.name}</h2>
        <p class="card__desc body-medium">${product.description}</p>
        <p class="card__price heading-3">$${product.price}</p>
      </div>
    `;
    return article;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("catalog__tab--active"));
      tab.classList.add("catalog__tab--active");
      currentCategory = tab.dataset.category;
      visibleCount = MOBILE_VISIBLE;
      renderCards();
    });
  });

  moreBtn.addEventListener("click", () => {
    visibleCount += MOBILE_LOAD;
    renderCards();
  });

  window.addEventListener("resize", () => {
    renderCards();
  });

  renderCards();
}
