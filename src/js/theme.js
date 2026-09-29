export function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}
