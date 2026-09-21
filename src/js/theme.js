export function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  if (!toggle) return;

  // 1. Восстанавливаем тему из localStorage
  const saved = localStorage.getItem("theme");

  // 2. Если тема не сохранена — ставим светлую
  const theme = saved || "light";
  html.setAttribute("data-theme", theme);

  // 3. Обработчик клика
  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}
