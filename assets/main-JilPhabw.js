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
	const theme = localStorage.getItem("theme") || "light";
	html.setAttribute("data-theme", theme);
	toggle.addEventListener("click", () => {
		const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
		html.setAttribute("data-theme", next);
		localStorage.setItem("theme", next);
	});
}
//#endregion
//#region src/js/main.js
document.addEventListener("DOMContentLoaded", () => {
	initTheme();
	initSlider();
});
function initSlider() {
	const slides = document.querySelectorAll(".slider__slide");
	const prevBtn = document.querySelector(".slider__arrow--prev");
	const nextBtn = document.querySelector(".slider__arrow--next");
	if (!slides.length || !prevBtn || !nextBtn) return;
	let currentIndex = 0;
	function showSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.toggle("slider__slide--active", i === index);
		});
		currentIndex = index;
	}
	prevBtn.addEventListener("click", () => {
		showSlide((currentIndex - 1 + slides.length) % slides.length);
	});
	nextBtn.addEventListener("click", () => {
		showSlide((currentIndex + 1) % slides.length);
	});
}
//#endregion

//# sourceMappingURL=main-JilPhabw.js.map