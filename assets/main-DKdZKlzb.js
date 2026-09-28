//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/js/theme.js
function initTheme() {
	const toggle = document.getElementById("theme-toggle");
	const html = document.documentElement;
	if (!toggle) return;
	toggle.addEventListener("click", () => {
		const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
		html.setAttribute("data-theme", next);
		localStorage.setItem("theme", next);
	});
}
//#endregion
//#region src/js/slider.js
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
		showSlide((currentIndex - 1 + slides.length) % slides.length);
	});
	nextBtn.addEventListener("click", () => {
		showSlide((currentIndex + 1) % slides.length);
	});
	dots.forEach((dot, i) => {
		dot.addEventListener("click", () => {
			showSlide(i);
		});
	});
}
//#endregion
//#region src/products.json
var products_default = /*#__PURE__*/ JSON.parse("[{\"name\":\"Irish coffee\",\"description\":\"Fragrant black coffee with Jameson Irish whiskey and whipped milk\",\"price\":\"7.00\",\"category\":\"coffee\",\"image\":\"coffee-1.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Kahlua coffee\",\"description\":\"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk\",\"price\":\"7.00\",\"category\":\"coffee\",\"image\":\"coffee-2.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Honey raf\",\"description\":\"Espresso with frothed milk, cream and aromatic honey\",\"price\":\"5.50\",\"category\":\"coffee\",\"image\":\"coffee-3.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Ice cappuccino\",\"description\":\"Cappuccino with soft thick foam in summer version with ice\",\"price\":\"5.00\",\"category\":\"coffee\",\"image\":\"coffee-4.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Espresso\",\"description\":\"Classic black coffee\",\"price\":\"4.50\",\"category\":\"coffee\",\"image\":\"coffee-5.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Latte\",\"description\":\"Espresso coffee with the addition of steamed milk and dense milk foam\",\"price\":\"5.50\",\"category\":\"coffee\",\"image\":\"coffee-6.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Latte macchiato\",\"description\":\"Espresso with frothed milk and chocolate\",\"price\":\"5.50\",\"category\":\"coffee\",\"image\":\"coffee-7.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Coffee with cognac\",\"description\":\"Fragrant black coffee with cognac and whipped cream\",\"price\":\"6.50\",\"category\":\"coffee\",\"image\":\"coffee-8.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Moroccan\",\"description\":\"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint\",\"price\":\"4.50\",\"category\":\"tea\",\"image\":\"tea-1.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Ginger\",\"description\":\"Original black tea with fresh ginger, lemon and honey\",\"price\":\"5.00\",\"category\":\"tea\",\"image\":\"tea-2.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Cranberry\",\"description\":\"Invigorating black tea with cranberry and honey\",\"price\":\"5.00\",\"category\":\"tea\",\"image\":\"tea-3.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Sea buckthorn\",\"description\":\"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon\",\"price\":\"5.50\",\"category\":\"tea\",\"image\":\"tea-4.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Marble cheesecake\",\"description\":\"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam\",\"price\":\"3.50\",\"category\":\"dessert\",\"image\":\"dessert-1.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Red velvet\",\"description\":\"Layer cake with cream cheese frosting\",\"price\":\"4.00\",\"category\":\"dessert\",\"image\":\"dessert-2.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Cheesecakes\",\"description\":\"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar\",\"price\":\"4.50\",\"category\":\"dessert\",\"image\":\"dessert-3.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Creme brulee\",\"description\":\"Delicate creamy dessert in a caramel basket with wild berries\",\"price\":\"4.00\",\"category\":\"dessert\",\"image\":\"dessert-4.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Pancakes\",\"description\":\"Tender pancakes with strawberry jam and fresh strawberries\",\"price\":\"4.50\",\"category\":\"dessert\",\"image\":\"dessert-5.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Honey cake\",\"description\":\"Classic honey cake with delicate custard\",\"price\":\"4.50\",\"category\":\"dessert\",\"image\":\"dessert-6.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Chocolate cake\",\"description\":\"Cake with hot chocolate filling and nuts with dried apricots\",\"price\":\"5.50\",\"category\":\"dessert\",\"image\":\"dessert-7.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Black forest\",\"description\":\"A combination of thin sponge cake with cherry jam and light chocolate mousse\",\"price\":\"6.50\",\"category\":\"dessert\",\"image\":\"dessert-8.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]}]");
//#endregion
//#region src/js/catalog.js
var MOBILE_VISIBLE = 4;
var MOBILE_LOAD = 4;
var currentCategory = "coffee";
var visibleCount = 4;
function initCatalog() {
	const grid = document.getElementById("catalog-grid");
	const tabs = document.querySelectorAll(".catalog__tab");
	const moreBtn = document.getElementById("catalog-more");
	if (!grid || !tabs.length) return;
	window.productsData = products_default;
	function isMobile() {
		return window.innerWidth <= 768;
	}
	function getVisibleCount() {
		if (isMobile()) return visibleCount;
		return Infinity;
	}
	function renderCards() {
		const filtered = products_default.filter((product) => product.category === currentCategory);
		const count = getVisibleCount();
		const visible = filtered.slice(0, count);
		grid.innerHTML = "";
		visible.forEach((product) => {
			grid.appendChild(createCard(product));
		});
		if (isMobile() && visible.length < filtered.length) moreBtn.style.display = "inline-flex";
		else moreBtn.style.display = "none";
	}
	function createCard(product) {
		const article = document.createElement("article");
		article.className = "card";
		article.dataset.productId = product.name;
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
//#endregion
//#region src/js/burger.js
function initBurger() {
	const burger = document.getElementById("burger");
	const menu = document.getElementById("mobile-menu");
	if (!burger || !menu) return;
	const menuLinks = menu.querySelectorAll(".mobile-menu__link");
	function openMenu() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		menu.classList.add("mobile-menu--open");
		burger.classList.add("burger--open");
		burger.setAttribute("aria-expanded", "true");
		document.body.classList.add("menu-open");
	}
	function closeMenu() {
		menu.classList.remove("mobile-menu--open");
		burger.classList.remove("burger--open");
		burger.setAttribute("aria-expanded", "false");
		document.body.classList.remove("menu-open");
	}
	function toggleMenu() {
		if (menu.classList.contains("mobile-menu--open")) closeMenu();
		else openMenu();
	}
	burger.addEventListener("click", toggleMenu);
	menuLinks.forEach((link) => {
		link.addEventListener("click", closeMenu);
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && menu.classList.contains("mobile-menu--open")) closeMenu();
	});
	window.addEventListener("resize", () => {
		if (window.innerWidth >= 769 && menu.classList.contains("mobile-menu--open")) closeMenu();
	});
}
//#endregion
//#region src/js/modal.js
var currentProduct = null;
var selectedSize = null;
var selectedAdditives = [];
function initModal() {
	const modal = document.getElementById("modal");
	if (!modal) return;
	const overlay = modal.querySelector(".modal__overlay");
	const submitBtn = modal.querySelector(".modal__submit");
	function closeModal() {
		modal.classList.remove("modal--open");
		modal.setAttribute("aria-hidden", "true");
		document.body.classList.remove("modal-open");
		currentProduct = null;
		selectedSize = null;
		selectedAdditives = [];
	}
	overlay.addEventListener("click", closeModal);
	submitBtn.addEventListener("click", closeModal);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modal.classList.contains("modal--open")) closeModal();
	});
	modal.querySelector(".modal__content").addEventListener("click", (e) => {
		e.stopPropagation();
	});
	document.addEventListener("click", (e) => {
		const card = e.target.closest(".card");
		if (card && card.dataset.productId) openModal(card.dataset.productId);
	});
}
function openModal(productId) {
	const modal = document.getElementById("modal");
	if (!modal) return;
	const product = window.productsData?.find((p) => p.name === productId);
	if (!product) return;
	currentProduct = product;
	selectedSize = "s";
	selectedAdditives = [];
	document.getElementById("modal-img").src = `./images/${product.image}`;
	document.getElementById("modal-img").alt = product.name;
	document.getElementById("modal-title").textContent = product.name;
	document.getElementById("modal-desc").textContent = product.description;
	const sizesContainer = document.getElementById("modal-sizes");
	sizesContainer.innerHTML = "";
	Object.entries(product.sizes).forEach(([key, value]) => {
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "modal__option";
		if (key === selectedSize) btn.classList.add("modal__option--active");
		btn.dataset.size = key;
		btn.innerHTML = `
      <span class="modal__option-num">${key.toUpperCase()}</span>
      <span class="modal__option-text">${value.size}</span>
    `;
		btn.addEventListener("click", () => selectSize(key));
		sizesContainer.appendChild(btn);
	});
	const additivesContainer = document.getElementById("modal-additives");
	additivesContainer.innerHTML = "";
	product.additives.forEach((additive, i) => {
		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "modal__option";
		btn.dataset.additive = additive.name;
		btn.innerHTML = `
      <span class="modal__option-num">${i + 1}</span>
      <span class="modal__option-text">${additive.name}</span>
    `;
		btn.addEventListener("click", () => toggleAdditive(additive.name));
		additivesContainer.appendChild(btn);
	});
	updateTotal();
	modal.classList.add("modal--open");
	modal.setAttribute("aria-hidden", "false");
	document.body.classList.add("modal-open");
}
function selectSize(size) {
	selectedSize = size;
	document.querySelectorAll("#modal-sizes .modal__option").forEach((btn) => {
		btn.classList.toggle("modal__option--active", btn.dataset.size === size);
	});
	updateTotal();
}
function toggleAdditive(name) {
	const index = selectedAdditives.indexOf(name);
	if (index > -1) selectedAdditives.splice(index, 1);
	else selectedAdditives.push(name);
	document.querySelectorAll("#modal-additives .modal__option").forEach((btn) => {
		btn.classList.toggle("modal__option--active", selectedAdditives.includes(btn.dataset.additive));
	});
	updateTotal();
}
function updateTotal() {
	if (!currentProduct) return;
	let total = parseFloat(currentProduct.price);
	if (selectedSize && currentProduct.sizes[selectedSize]) total += parseFloat(currentProduct.sizes[selectedSize]["add-price"]);
	selectedAdditives.forEach((name) => {
		const additive = currentProduct.additives.find((a) => a.name === name);
		if (additive) total += parseFloat(additive["add-price"]);
	});
	document.getElementById("modal-total").textContent = `$${total.toFixed(2)}`;
}
//#endregion
//#region src/js/main.js
document.addEventListener("DOMContentLoaded", () => {
	initTheme();
	initSlider();
	initCatalog();
	initBurger();
	initModal();
});
//#endregion

//# sourceMappingURL=main-DKdZKlzb.js.map