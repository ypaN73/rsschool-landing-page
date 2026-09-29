export function initBurger() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobile-menu");

  if (!burger || !menu) return;

  const menuLinks = menu.querySelectorAll(".mobile-menu__link");

  function openMenu() {
    window.scrollTo({ top: 0, behavior: "smooth" });

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
    if (menu.classList.contains("mobile-menu--open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  burger.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("mobile-menu--open")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 769 &&
      menu.classList.contains("mobile-menu--open")
    ) {
      closeMenu();
    }
  });
}
