document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tile").forEach((card) => {
    const link = card.querySelector("a");

    if (!link) return;

    card.style.cursor = "pointer";

    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      window.location = link.href;
    });
  });
});